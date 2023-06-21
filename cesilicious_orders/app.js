var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose')

var postOrderRouter = require('./routes/postOrder');
var getOrdersRouter = require('./routes/getOrders');
var getOrderByOrderIdRouter = require('./routes/getOrderByOrderId');
var getOrderByUserIdRouter = require('./routes/getOrderByUserId');
var getOrderByDelivererIdRouter = require('./routes/getOrderByDelivererId');
var getOrderByRestaurantIdRouter = require('./routes/getOrderByRestaurantId');
var putOrderByOrderIdRouter = require('./routes/putOrderByOrderId');
var putOrderByUserIdRouter = require('./routes/putOrderByUserId');
var putOrderByDelivererIdRouter = require('./routes/putOrderByDelivererId');
var putOrderByRestaurantIdRouter = require('./routes/putOrderByRestaurantId');
var deleteOrderByOrderIdRouter = require('./routes/deleteOrderByOrderId');
var deleteOrderByUserIdRouter = require('./routes/deleteOrderByUserId');
var deleteOrderByDelivererIdRouter = require('./routes/deleteOrderByDelivererId');
var deleteOrderByRestaurantIdRouter = require('./routes/deleteOrderByRestaurantId');

var app = express();

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
    dbName: 'CesiLicious'
    })
  .then(() => console.log('Connexion à MongoDB Orders réussie !'))
  .catch(() => console.log('Connexion à MongoDB Orders échouée !'));

module.exports = app;