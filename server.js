const express = require('express');

const testRouter = require('./routes/test');

const app = express();

app.use('/', testRouter);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);