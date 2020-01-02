const express = require('express');
const Web3 = require('web3');
const router = express.Router();
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));

const db = require('../db/db_info')
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    let { userid, public_key, is_logined } = req.session;
    if (!is_logined) {
        return res.redirect('/')
    }
    await web3.eth.getBalance(public_key, function (err, wei) {
        balance = web3.utils.fromWei(wei, 'ether')
    });
    var sql = 'select txhash from txhash where userid = ?'
    db.mysql.query(sql, [userid], function (err, result) {
        if (err) {
            return res.render('err')
        }

        let txhash_list = [];
        for (let i = 0; i < result.length; i++) {
            txhash_list.push(result[i].txhash)
        }
        const mypage = { userid, public_key, balance, txhash_list };
        return res.json(mypage);
    });
});

router.get('/session_destroy', (req, res) => {
    req.session.destroy();  // 세션 삭제
    res.clearCookie('sid'); // 세션 쿠키 삭제
    res.redirect('/');
})

router.post('/deposit', async (req, res) => {
    let { userid } = req.session;
    let { result } = req.body;
    result = result.substring(0, 67)
    db.mysql.query('INSERT INTO txhash(userid, txhash, toAddress) values(?, ?, null)', [userid, result], 
    await function (err, result) {
      return res.json({})
    })
});

module.exports = router;
