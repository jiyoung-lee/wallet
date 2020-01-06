const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const CryptoJS = require('crypto-js');

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    let { is_logined } = req.session;
    if (!is_logined) {
        return res.redirect('/')
    }
})

router.post('/account', (req, res) => {
    let { id, password } = req.body;
    let { userid, private_key } = req.session;
    let sessPassword = req.session.password;
    if (userid !== id) {
        res.status(200).json({})
    } else {
        bcrypt.compare(password, sessPassword, (err, value) => {
            if (value !== true) {
                return res.status(200).json({})
            }
            if (value === true) {
                let decrypt = CryptoJS.AES.decrypt(private_key, '123')
                private_key = decrypt.toString(CryptoJS.enc.Utf8)
                const pkey = private_key.substring(2);
                return res.status(202).json(pkey);
            }
        })
    }

})

module.exports = router;
