//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

exports.registerEvent = (body) => {
    var form = {
        type: body.type,
        call_id: body.call_id,
        start_date: body.timestamp,
        finish_date: null,
        code: body.code,
        direction: body.direction,
        our_number: body.our_number,
        their_number: body.their_number,
        their_number_type: body.their_number_type
    }

    var call = new CallsModel(form)

    call.save()
}