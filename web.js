/**
 * Created by BoB on 7/19/2017.
 */
var compression = require('compression')
var express = require('express')

var app = express()

// compress all responses
app.use(compression());
app.use(express.logger('dev'));
app.use(express.static("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
