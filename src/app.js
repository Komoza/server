const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const actionRouter = require('./routes/action');

dotenv.config();
const {
    PORT = 3000,
    API_URL = 'http://127.0.0.1',
    MONGODB_URI = '',
} = process.env;

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.use(actionRouter);

app.listen(PORT, () => {
    console.log(`Server was started at ${API_URL}:${PORT}`);
});
