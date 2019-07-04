const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
    status: String,
    their_number: Number,
    their_number_type: String
});

mongoose.model('Customer', CustomerSchema);

