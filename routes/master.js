const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/master_process', (req, res) => {
  let { id, password } = req.body;

  var sql = 'SELECT u.userId, u.password, m.master FROM userInfo As u JOIN master As m ON u.userId = m.userid'
  db.mysql.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(200).json({})
    }
    if (!result.length) {
      return res.status(200).json({})
    }
    if (result[0].userId !== id) {
      return res.status(200).json({})
    }
    bcrypt.compare(password, result[0].password, (err, data) => {
      if (data === true) {
        req.session.is_logined = true;
        req.session.userId = result[0].userId;
        req.session.password = result[0].password;
        req.session.master = result[0].master;
        req.session.save(() => {
          return res.status(201).json({})
        });
      } else {
        return res.status(200).json({});
      }
    })
  });
});

module.exports = router;
