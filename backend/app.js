const express = require('express');
const app = express();
const products = require('./routes/product');
const auth = require('./routes/auth');
var bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api/v1', products);
app.use('/api/v1', products);
app.use(errorMiddleware);
module.exports = app