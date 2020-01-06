const express = require('express');
const router = express.Router();

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  let { is_logined } = req.session;
  if (!is_logined) {
    return res.redirect('/')
  }
})

router.post('/userout_process', async (req, res) => {
  let { id } = req.body;

  //아이디 일치여부
  var sql = 'select userid from wallet_info where userid = ?'
  db.mysql.query(sql, [id], (err, result) => {
    if (result[0].userid !== id) {
      return res.status(200).json({})
    } else {
      //강퇴 회원으로 변경
      var sql = 'UPDATE wallet_info SET isDeleted = 1, deleteDate = now() WHERE userid = ?'
      db.mysql.query(sql, [id], (err, result) => {
        if (result.affectedRows === 1) {
          return res.status(202).json({})
        } else {
          console.log('에러란다')
        }
      });
    }
  })
});

module.exports = router;
