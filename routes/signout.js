const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

const db = require('../db/db_info')
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  let { is_logined } = req.session;
  if (!is_logined) {
    return res.redirect('/')
  }
})

router.post('/signout_process', async (req, res) => {
  let { userid } = req.session;
  let { id, password } = req.body;

  //아이디 일치여부
  if (userid !== id) {
    res.status(200).json({})
  } else {
    //비밀번호 일치여부
    bcrypt.compare(password, req.session.password, (err, value) => {
      if (value !== true) {
        return res.status(200).json({})
      } else {
        //탈퇴 회원으로 변경
        var sql = 'UPDATE wallet_info SET isDeleted = 1, deleteDate = now() WHERE userid = ?'
        db.mysql.query(sql, [userid], (err, result) => {
          if (result.affectedRows === 1) {
            req.session.destroy();
            res.clearCookie('sid');
            return res.status(202).json({})
          } else {
            console.log('에러란다')
          }
        });
      }
    })
  }
});

module.exports = router;
