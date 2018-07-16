var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressvalidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyparser.urlencoded({extended : true}));
app.use(expressvalidator());

consign()
.include('app/routes')
.include('config/dbConnection.js')
.include('app/models')
.include('app/controllers')
.include('app/helpers')
.into(app);

module.exports = app;