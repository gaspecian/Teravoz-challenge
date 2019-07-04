//models
var mongoose = require('mongoose')
var CustomerModel = mongoose.model('Customer');

//libs
var requestsLib = require("../lib/requests.js")

//Checks if it is new user
exports.isNewUser = (body) => {

    CustomerModel.findOne({their_number: body.their_number}, function(err, result){
        if (err) throw err;
        if (result){

            // Configure the request
            var req = {
                uri: 'actions',
                method: 'post',
                form: { "type": "delegate", "call_id": body.call_id , "destination": "900"}
            }

            var request = requestsLib.requests(req)
        }
        else {
            // Configure the request
            var req = {
                uri: 'actions',
                method: 'post',
                form: { "type": "delegate", "call_id": body.call_id , "destination": "901"}
            }
            var request = requestsLib.requests(req)

            var newCustomer = {
                status: 'prospect',
                their_number: body.their_number,
                their_number_type: body.their_number_type
            }

            var customer = new CustomerModel(newCustomer)
            customer.save()

        }
        return request  
    })
}