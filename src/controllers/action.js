const Book = require('../models/book');
const User = require('../models/user');

const takeBook = async (request, response) => {
    try {
        const { user_id, book_id } = request.params;

        // Проверяем, есть ли такая книга
        const book = await Book.findById(book_id);
        if (!book) {
            return response.status(404).send('Book not found');
        }

        // Проверяем, есть ли такой пользователь
        const user = await User.findById(user_id);
        if (!user) {
            return response.status(404).send('User not found');
        }

        // Проверяем, не взята ли книга уже кем-то другим
        if (book.borrower) {
            return response.status(400).send('Book already borrowed');
        }

        // Обновляем информацию о книге и пользователе
        book.borrower = user._id;
        await book.save();

        // Добавляем книгу в массив borrowed_books пользователя
        user.borrowed_books.push(book._id);
        await user.save();

        return response.status(200).send('Book successfully borrowed');
    } catch (error) {
        console.error('Error taking book:', error);
        return response.status(500).send(error.message);
    }
};

const returnBook = async (request, response) => {
    try {
        const { user_id, book_id } = request.params;

        // Проверяем, есть ли такая книга
        const book = await Book.findById(book_id);
        if (!book) {
            return response.status(404).send('Book not found');
        }

        // Проверяем, взята ли книга
        if (!book.borrower) {
            return response.status(400).send('Book not borrowed');
        }

        // Сбрасываем информацию о заимодателе
        book.borrower = null;
        await book.save();

        // Удаляем книгу из массива borrowed_books пользователя
        const user = await User.findById(user_id);
        user.borrowed_books.pull(book._id);
        await user.save();

        return response.status(200).send('Book successfully returned');
    } catch (error) {
        console.error('Error returning book:', error);
        return response.status(500).send(error.message);
    }
};

module.exports = {
    takeBook,
    returnBook,
};
