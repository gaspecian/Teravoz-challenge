var express = require("express")
var app = express()

var cors = require('cors');
var bodyParser = require('body-parser');

//configure
app.use(cors());
app.use(require('morgan')('dev'));

//mongo connection
var mongoose = require('mongoose')
mongoose.promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/teravozclient')
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
// mongoose.set('debug', true)

//models
require("./models/calls.model")
require("./models/customer.model")

//libs
var decideService = require("./decideService.js")

//Controllers
var callsDashboardController = require("./controller/callsDashboard.controller.js")
var customersDashboardController = require("./controller/customersDashboard.controller.js")

app.use(express.static('public/dist/public'));

//bodyParser JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Webhook post
app.post("/webhook",decideService.decide)

//Dashboards get
app.get("/calls/:query",callsDashboardController.querys)
app.get("/customers/:query",customersDashboardController.querys)

app.listen(8000, () => {
    console.log("Listen in port: 8000")
})