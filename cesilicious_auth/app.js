const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const authUserRouter = require('./routes/authUser');
const postUserRouter = require('./routes/postUser');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/login', authUserRouter);
app.use('/user', postUserRouter);

module.exports = app;
