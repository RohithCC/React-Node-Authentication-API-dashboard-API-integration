const express = require('express');
var cors = require('cors')
const app = express();


app.use(cors())

const cookieParser = require('cookie-parser')

const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(cookieParser())

//importing all routes
const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api/v1', products)
app.use('/api/v1', auth)

//Middle to Handler Errors
app.use(errorMiddleware);

module.exports = app