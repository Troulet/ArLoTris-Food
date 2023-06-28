const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const authUserRouter = require('./routes/authUser');
const postUserRouter = require('./routes/postUser');
const getUserByIdRouter = require('./routes/getUserById');
const putUserByIdRouter = require('./routes/putUserById');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/login', authUserRouter);
app.use('/user', postUserRouter);
app.use('/user', getUserByIdRouter);
app.use('/user', putUserByIdRouter);

module.exports = app;
