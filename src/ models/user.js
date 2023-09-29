const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 2,
    },
    email: {
        type: String,
        required: true,
        minLenght: 2,
    },
    phone_number: {
        type: String,
        required: true,
        minLenght: 2,
    },
});

module.exports = mongoose.model('user', userSchema);
