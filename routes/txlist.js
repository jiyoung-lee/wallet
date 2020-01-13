const express = require('express');
const router = express.Router();

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    let { userId, is_logined } = req.session;

    if (!is_logined) {
        return res.redirect('/')
    }

    var sql = 'select txHash, toAddress from txHash where userId = ? order by num desc'
    db.mysql.query(sql, [userId], (err, result) => {
        if (err) {
            return res.render('err')
        }
        let lists = [];
        for (let i = 0; i < result.length; i++) {
            lists.push(result[i])
        }
        const mypage = { lists };
        return res.json(mypage);
    });
});

router.get('/session_destroy', (req, res) => {
    req.session.destroy();  // 세션 삭제
    res.clearCookie('sid'); // 세션 쿠키 삭제
    res.redirect('/');
})

module.exports = router;
