//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');

//controllers
var callNewController = require("./controller/callNew.controller.js")
var callStandbyController = require("./controller/callStandby.controller.js")
var actorEnteredController = require("./controller/actorEntered.controller.js")
var actorLeftController = require("./controller/actorLeft.controller.js")
var callFinishedController = require("./controller/callFinish.controller.js")

//decide type of service
exports.decide = (req, res) => {
    var { body } = req;
    var type = body.type
    
    if(type != 'call.new'){
        CallsModel.updateOne({call_id: body.call_id}, {type: body.type}, function(err){
            if (err) throw err;
    
        })
    }

    //Decides which controller to use  
    switch (type){
        case 'call.new':
            callNewController.registerEvent(body)
            break;
        case 'call.standby':
            callStandbyController.isNewUser(body)
            break;
        case 'actor.entered':
            actorEnteredController.registerActor(body)
            break;
        case 'actor.left':
            actorLeftController.registerActorExit(body)
            break;
        case 'call.finished':
            callFinishedController.finishCall(body)
            break;
    }
    res.status(200).json({status: 'Ok'})
}