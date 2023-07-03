const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const authUserRouter = require('./routes/authUser');
const postUserRouter = require('./routes/postUser');
const getUserByIdRouter = require('./routes/getUserById');
const getUserBySponsorIdRouter = require('./routes/getUserBySponsorId');
const putUserByIdRouter = require('./routes/putUserById');
const putIdSponsorByIdRouter = require ('./routes/putIdSponsorById');
const getPerformanceRouter = require('./routes/getPerformance');
const deleteUserByIdRouter = require('./routes/deleteUserById');
const putPasswordByEmailRouter = require('./routes/putPasswordByEmail');

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
app.use('/user', deleteUserByIdRouter);
app.use('/sponsor', getUserBySponsorIdRouter);
app.use('/sponsor', putIdSponsorByIdRouter);
app.use('/performance', getPerformanceRouter);
app.use('/password', putPasswordByEmailRouter);

module.exports = app;
