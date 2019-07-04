var request = require("request")

exports.requests = (req) =>{
    
    var options = {
        url: 'https://api.teravoz.com.br/' + req.uri ,
        method: req.method,
        headers: {'Authorization': 'Basic <USUÁRIO:SENHA codificados em base64>', 'Content-Type': 'application/json'},
        form: req.body
    }

    // Start the request
    // request(options, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         // Print out the response body
    //         return response
    //     } else {
    //         return error
    //     }
    // })
    return options
}