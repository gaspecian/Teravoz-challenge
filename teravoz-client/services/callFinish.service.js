//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

exports.finishCall = (body) => {

    CallsModel.updateOne({call_id: body.call_id}, {finish_date: body.timestamp}, function(err){
        if (err) {
            console.log("Error DB: " + err)
        }
    })

}