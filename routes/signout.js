const express = require('express');
const router = express.Router();

const db = require('../db/db_info')
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function (req, res, next) {
    let { is_logined } = req.session;
    if (!is_logined) {
        return res.redirect('/')
    }
})

router.post('/signout_process', function (req, res) {
    let { password } = req.body;
    res.status(201).json({})

    // 탈퇴기능
    // var sql = 'select * from wallet_info where userid=?'
    // db.mysql.query(sql, [id], function (err, result) {
    //     bcrypt.compare(password, result[0].password, function (err, data) {
    //         if (data === true) {
    //             req.session.is_logined = true;
    //             req.session.userid = result[0].userid;
    //             req.session.password = result[0].password;
    //             req.session.private_key = result[0].private_key;
    //             req.session.public_key = result[0].public_key;
    //             req.session.save(function () {
    //                 return res.status(202).json({})
    //             });
    //         } else {
    //               return res.status(200).json({});
    //         }
    //     })
    // });

});

module.exports = router;
