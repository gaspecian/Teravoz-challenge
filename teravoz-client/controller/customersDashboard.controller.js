//models
var mongoose = require('mongoose')
var CustomerModel = mongoose.model('Customer');


exports.querys = async(req, res) => {
    var queryType = req.params.query;
    switch (queryType){
        case 'prospects':
            var query = {"status" : "prospect"}
            break;
        case 'onboard':
            var query = {"status" : "onboard"}
            break;
        case 'exclients':
            var query = {"status" : "exclients"}
            break;
        case 'all':
            var query = {}
            break;
        default:
            var query = {"status": "null"}
    }

    CustomerModel.find(query, function(err, result){
        if (err) {
            return err
        } else {
            return res.status(200).json(result);
        }
    })
}
