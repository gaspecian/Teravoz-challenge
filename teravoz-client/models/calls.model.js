const mongoose = require('mongoose');

const { Schema } = mongoose;

const CallsSchema = new Schema({
    type: String,
    start_date: Date,
    finish_date: Date,
    call_id: Number,
    code: Number,
    direction: String,
    our_number: Number,
    their_number: Number,
    their_number_type: String,
    actors: [{
        actor: String,
        number: Number,
        queue: Number,
        start_date: Date,
        finish_date: Date
    }]
});

mongoose.model('Calls', CallsSchema);

