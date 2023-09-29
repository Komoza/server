const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 2,
    },
    author: {
        type: String,
        required: true,
        minLenght: 2,
    },
    publication_year: {
        type: Number,
        required: true,
        minLenght: 2,
    },
    genre: {
        type: String,
        required: true,
        minLenght: 2,
    },
    isbn: {
        type: String,
        required: true,
        minLenght: 2,
    },
});

module.exports = mongoose.model('book', bookSchema);
