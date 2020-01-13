const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.post('/login_process', (req, res) => {
  let { id, password } = req.body;

  var sql = 'SELECT * FROM userInfo WHERE userId=? AND isDeleted=0'
  db.mysql.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(200).json({})
    }
    if (!result.length) {
      return res.status(200).json({})
    }
    bcrypt.compare(password, result[0].password, (err, data) => {
      if (data === true) {
        req.session.is_logined = true;
        req.session.userId = result[0].userId;
        req.session.password = result[0].password;
        req.session.private_key = result[0].private_key;
        req.session.public_key = result[0].public_key;
        req.session.createDate = result[0].createDate;
        req.session.deleteDate = result[0].deleteDate;
        req.session.isDeleted = result[0].isDeleted;
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
