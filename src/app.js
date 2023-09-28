const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');

dotenv.config();
const app = express();
const { PORT = 3000, API_URL = 'http://127.0.0.1' } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
app.listen(PORT, () => {
    console.log(`Server was started at ${API_URL}:${PORT}`);
});
