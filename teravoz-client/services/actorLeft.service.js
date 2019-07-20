//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

exports.registerActorExit = (body) => {

    CallsModel.updateOne({'call_id': body.call_id, 'actors.actor': body.actor}, {$set: {'actors.$.finish_date': body.timestamp}}, function(err){
        if (err) {
            console.log("Error DB: " + err)
        }
    })
}