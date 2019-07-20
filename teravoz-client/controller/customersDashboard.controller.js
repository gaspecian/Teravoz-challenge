//models
var mongoose = require('mongoose')
var CustomerModel = mongoose.model('Customer');

exports.customers = async(req, res) => {

    CustomerModel.find({}, function(err, result){
        if (err) {
            console.log("Error DB: " + err)
            return res.status(500).json(err)
        } else {
            return res.status(200).json(result);
        }
    })
}

exports.customersByStatus = async(req, res) => {
    var queryType = req.params.query;

    CustomerModel.find({"status" : queryType}, function(err, result){
        if (err) {
            console.log("Error DB: " + err)
            return res.status(500).json(err)
        } else {
            return res.status(200).json(result);
        }
    })
}
