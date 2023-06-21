const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose')

const postOrderRouter = require('./routes/postOrder');
const getOrdersRouter = require('./routes/getOrders');
const getOrderByOrderIdRouter = require('./routes/getOrderByOrderId');
const getOrderByUserIdRouter = require('./routes/getOrderByUserId');
const getOrderByDelivererIdRouter = require('./routes/getOrderByDelivererId');
const getOrderByRestaurantIdRouter = require('./routes/getOrderByRestaurantId');
const putOrderByOrderIdRouter = require('./routes/putOrderByOrderId');
const putOrderByUserIdRouter = require('./routes/putOrderByUserId');
const putOrderByDelivererIdRouter = require('./routes/putOrderByDelivererId');
const putOrderByRestaurantIdRouter = require('./routes/putOrderByRestaurantId');
const deleteOrderByOrderIdRouter = require('./routes/deleteOrderByOrderId');
const deleteOrderByUserIdRouter = require('./routes/deleteOrderByUserId');
const deleteOrderByDelivererIdRouter = require('./routes/deleteOrderByDelivererId');
const deleteOrderByRestaurantIdRouter = require('./routes/deleteOrderByRestaurantId');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/orders', postOrderRouter, getOrdersRouter, getOrderByOrderIdRouter, putOrderByOrderIdRouter, deleteOrderByOrderIdRouter);
app.use('/users', getOrderByUserIdRouter, putOrderByUserIdRouter, deleteOrderByUserIdRouter);
app.use('/deliverers', getOrderByDelivererIdRouter, putOrderByDelivererIdRouter, deleteOrderByDelivererIdRouter);
app.use('/restaurants', getOrderByRestaurantIdRouter, putOrderByRestaurantIdRouter, deleteOrderByRestaurantIdRouter);

module.exports = app;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cesilicious'
    })
  .then(() => console.log('Connexion à MongoDB Orders réussie !'))
  .catch(() => console.log('Connexion à MongoDB Orders échouée !'));

module.exports = app;