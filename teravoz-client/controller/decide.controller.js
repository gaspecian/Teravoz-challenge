//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

//controllers
var callNewService = require("../services/callNew.service.js")
var callStandbyService = require("../services/callStandby.service.js")
var actorEnteredService = require("../services/actorEntered.service.js")
var actorLeftService = require("../services/actorLeft.service.js")
var callFinishedService = require("../services/callFinish.service.js")

//decide type of service
exports.decide = (req, res) => {
    var { body } = req;
    var type = body.type
    
    if(type != 'call.new'){
        CallsModel.updateOne({call_id: body.call_id}, {type: body.type}, function(err){
            if (err) throw err;
    
        })
    }

    //Decides which Service to use  
    switch (type){
        case 'call.new':
            callNewService.registerEvent(body)
            break;
        case 'call.standby':
            callStandbyService.isNewUser(body)
            break;
        case 'actor.entered':
            actorEnteredService.registerActor(body)
            break;
        case 'actor.left':
            actorLeftService.registerActorExit(body)
            break;
        case 'call.finished':
            callFinishedService.finishCall(body)
            break;
    }
    res.status(200).json({status: 'Ok'})
}