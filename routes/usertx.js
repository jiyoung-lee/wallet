const express = require('express');
const router = express.Router();

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    let { is_logined } = req.session;

    if (!is_logined) {
        return res.redirect('/')
    }

    var sql = 'select userId, txHash, toAddress from txHash order by num desc'
    db.mysql.query(sql, (err, result) => {
        if (err) {
            return res.render('err')
        }

        let lists = [];
        for (let i = 0; i < result.length; i++) {
            lists.push(result[i])
        }
        const userTx = { lists };
        return res.json(userTx);
    });
});

router.get('/session_destroy', (req, res) => {
    req.session.destroy();  // 세션 삭제
    res.clearCookie('sid'); // 세션 쿠키 삭제
    res.redirect('/');
})

module.exports = router;
