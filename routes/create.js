const express = require('express');
const Web3 = require('web3');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const CryptoJS = require('crypto-js');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/create_process', (req, res) => {
    let { id, password } = req.body;
    let idCheck = /^[A-za-z0-9]{5,15}/g;
    let passwordCheck = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;
    if (!idCheck.test(id)) {
        return res.status(202).json({ message: "아이디는 영문자, 숫자로 시작하는 5~15자 이어야합니다." })
    }
    if (password.length < 8 || password.length > 16 || !passwordCheck.test(password)) {
        return res.status(202).json({ message: '암호를 8자이상 16자 이하의 특수문자 조합으로 설정해주세요' })
    }

    let account = web3.eth.accounts.create();
    let password1 = bcrypt.hashSync(password)
    let privatekey1 = CryptoJS.AES.encrypt(account.privateKey, '123').toString();
    let sql = 'insert into wallet_info(userid, password, public_key, private_key, createDate, deleteDate, isDeleted, master) values(?, ?, ?, ?, now(), null, 0, 0)';
    db.mysql.query(sql, [id, password1, account.address, privatekey1], (err, result) => {
        if (err) {
            return res.status(200).json({});
        }
        return res.status(201).json({});
    })
});

module.exports = router;