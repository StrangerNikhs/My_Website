const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    massege: {
        type: String,
        required: true
    }
});

const empCollection = new mongoose.model('my_data', empSchema);

module.exports = empCollection; 