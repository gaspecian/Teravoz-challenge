//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

exports.registerActor = (body) => {
    var form = {
        actor: body.actor,
        number: body.number,
        queue: body.queue,
        start_date: body.timestamp,
        finish_date: null
    }

    CallsModel.updateOne({call_id: body.call_id}, {$push: {actors: form}}, function(err){
        if (err) throw err;
    })
}