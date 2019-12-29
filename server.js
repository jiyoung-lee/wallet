const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const createRouter = require('./routes/create');
const mainRouter = require('./routes/main');
const sendRouter = require('./routes/send');
const privatekeyRouter = require('./routes/privatekey');
const txlistRouter = require('./routes/txlist');
const signoutRouter = require('./routes/signout');

const db = require('./db/db_info')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client/build')));

app.use(session({
    secret: 'asadlfkj!@#',
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore(db.info)
}));

app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/main', mainRouter);
app.use('/send', sendRouter);
app.use('/privatekey', privatekeyRouter);
app.use('/txlist', txlistRouter);
app.use('/signout', signoutRouter);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

