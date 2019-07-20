var express = require("express")
var app = express()

//Controllers
var callsDashboardController = require("./controller/callsDashboard.controller.js")
var customersDashboardController = require("./controller/customersDashboard.controller.js")
var decideController = require("./controller/decide.controller.js")

//Webhook post
app.post("/webhook",decideController.decide)

//Dashboards get

//calls
app.get("/calls",callsDashboardController.calls)
app.get("/callsbytype/:query",callsDashboardController.callsbytype)

//customers
app.get("/customers",customersDashboardController.customers)
app.get("/customers/:query",customersDashboardController.customersByStatus)

module.exports = app;