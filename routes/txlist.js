const express = require('express');
const router = express.Router();

const db = require('../db/db_info')
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    let { userid, is_logined } = req.session;

    if (!is_logined) {
        return res.redirect('/')
    }

    var sql = 'select txhash from txhash where userid = ?'
    db.mysql.query(sql, [userid], (err, result) => {
        if (err) {
            return res.render('err')
        }
        //let TxHashList = result[0].txhash;
        let txhash_list = [];
        for (let i = 0; i < result.length; i++) {
            txhash_list.push(result[i].txhash)
        }
        const mypage = {txhash_list};
        return res.json(mypage);
    });
});

router.get('/session_destroy', (req, res) => {
    req.session.destroy();  // 세션 삭제
    res.clearCookie('sid'); // 세션 쿠키 삭제
    res.redirect('/');
})


module.exports = router;
