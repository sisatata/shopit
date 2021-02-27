const express = require('express');
const app = express();
const products = require('./routes/product');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api/v1', products);
module.exports = app