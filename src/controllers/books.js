const Book = require('../models/book');

const getBooks = async (request, response) => {
    try {
        const data = await Book.find({});
        return response.status(200).send(data);
    } catch (error) {
        console.error('Error getting books:', error);
        return response.status(500).send(error.message);
    }
};

const getBook = async (request, response) => {
    try {
        const { book_id } = request.params;
        const book = await Book.findById(book_id);
        return response.status(200).send(book);
    } catch (error) {
        console.error('Error getting book:', error);
        return response.status(500).send(error.message);
    }
};

const addBook = async (request, response) => {
    try {
        const book = await Book.create({
            ...request.body,
        });
        return response.status(201).send(book);
    } catch (error) {
        console.error('Error creating book:', error);
        return response.status(500).send(error.message);
    }
};

const updateBook = async (request, response) => {
    try {
        const { book_id } = request.params;
        const book = await Book.findByIdAndUpdate(book_id, { ...request.body });
        return response.status(200).send(book);
    } catch (error) {
        console.error('Error updating book:', error);
        return response.status(500).send(error.message);
    }
};

const removeBook = async (request, response) => {
    try {
        const { book_id } = request.params;
        await Book.findByIdAndRemove(book_id);
        return response.status(204).send();
    } catch (error) {
        console.error('Error deleting book:', error);
        return response.status(500).send(error.message);
    }
};

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    removeBook,
};
