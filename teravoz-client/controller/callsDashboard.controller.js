//models
var mongoose = require('mongoose')
var CallsModel = mongoose.model('Calls');


exports.querys = async(req, res) => {
    var queryType = req.params.query;
    switch (queryType){
        case 'actoratending':
            var query = {"type" : "actor.entered"}
            break;
        case 'callfinished':
            var query = {"type" : "call.finished"}
            break;
        case 'callstandby':
            var query = {"type" : "call.standby"}
            break;
        case 'callnew':
            var query = {"type" : "call.new"}
            break;
        case 'actorleft':
            var query = {"type" : "call.left"}
            break;
        case 'all':
            var query = {}
            break;
        default:
            var query = {"type": "null"}
    }

    CallsModel.find(query, function(err, result){
        if (err) {
            return err
        } else {
            return res.status(200).json(result);
        }
    })
}
