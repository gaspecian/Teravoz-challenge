//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');


exports.calls = async(req, res) => {
    CallsModel.find({}, function(err, result){
        if (err) {
            console.log("Error DB: " + err)
            res.status(500).json(err)
        } else {
            res.status(200).json(result);
        }
    })
}

exports.callsbytype = async(req, res) => {
    var queryType = req.params.query;

    CallsModel.find({"type": queryType}, function(err, result){
        if (err) {
            console.log("Error DB: " + err)
            res.status(500).json(err)
        } else {
            res.status(200).json(result);
        }
    })
}
