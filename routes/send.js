const express = require('express');
const Web3 = require('web3');
const router = express.Router();
const CryptoJS = require('crypto-js');
const Tx = require('ethereumjs-tx').Transaction;
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));

const db = require('../db/db_info')
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  let { is_logined } = req.session;

  if (is_logined !== true) {
    return res.redirect('/')
  }
});

router.post('/send_process', async (req, res) => {
  let { private_key, public_key, userId } = req.session;
  let { toAddress, value, gasPrice } = req.body;

  let privatekey = CryptoJS.AES.decrypt(private_key, '123').toString(CryptoJS.enc.Utf8);

  //주소 길이조건
  if (toAddress.length !== 42) {
    return res.status(201).json({});
  }

  //올바른 주소 확인
  let ckad = web3.utils.checkAddressChecksum(toAddress);
  if (ckad === false) {
    return res.status(201).json({});
  }

  let gwei = 9
  let privateKey = Buffer.from(privatekey.substring(2), 'hex');

  let nonce = await web3.eth.getTransactionCount(public_key, "pending")
  let rawTx = {
    nonce: nonce,
    gasPrice: web3.utils.toHex(gasPrice * (10 ** gwei)),
    gasLimit: web3.utils.toHex(21000),
    to: toAddress,
    from: public_key,
    value: web3.utils.toHex(web3.utils.toWei(value, 'ether'))
  }

  let tx = new Tx(rawTx, { 'chain': 'ropsten' });
  tx.sign(privateKey);
  let serializedTx = tx.serialize();

  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash) => {
    if (err) {
      return res.status(203).json({});
    }

    var sql = 'insert into txHash (userId, txHash, toAddress) values(?, ?, ?)'
    db.mysql.query(sql, [userId, hash, toAddress], (err, result) => {
      if (err) {
        return res.status(200).json({});
      }
      return res.status(202).json({});
    });
  });
});

module.exports = router;
