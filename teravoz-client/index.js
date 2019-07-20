var express = require("express")
var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//configure
app.use(cors());
app.use(require('morgan')('dev'));

//bodyParser JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongo connection
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/teravozclient', { useNewUrlParser: true })
mongoose.set('debug', true)

//models
require("./models/calls.model")
require("./models/customer.model")

app.use(require("./router"))

app.use(express.static('public/dist/public'));


app.listen(8000, () => {
    console.log("Listen in port: 8000")
})