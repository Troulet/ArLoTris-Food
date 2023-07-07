const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

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
const getPerformanceRouter = require('./routes/getPerformance');
const getCountOrdersByRestaurantIdRouter = require('./routes/getCountOrdersByRestaurantId');
const getCountCurrentOrdersByRestaurantIdRouter = require('./routes/getCountCurrentOrdersByRestaurantId');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/orders', postOrderRouter);
app.use('/orders', getOrdersRouter);
app.use('/orders', getOrderByOrderIdRouter);
app.use('/orders', putOrderByOrderIdRouter);
app.use('/orders', deleteOrderByOrderIdRouter);
app.use('/users', getOrderByUserIdRouter);
app.use('/users', putOrderByUserIdRouter);
app.use('/users', deleteOrderByUserIdRouter);
app.use('/deliverers', getOrderByDelivererIdRouter);
app.use('/deliverers', putOrderByDelivererIdRouter);
app.use('/deliverers', deleteOrderByDelivererIdRouter);
app.use('/restaurants', getOrderByRestaurantIdRouter);
app.use('/restaurants', putOrderByRestaurantIdRouter);
app.use('/restaurants', deleteOrderByRestaurantIdRouter);
app.use('/performance', getPerformanceRouter);
app.use('/countOrders', getCountOrdersByRestaurantIdRouter);
app.use('/countOrders/current', getCountCurrentOrdersByRestaurantIdRouter);

module.exports = app;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cesilicious'
    })
  .then(() => console.log('Connexion à MongoDB Orders réussie !'))
  .catch(() => console.log('Connexion à MongoDB Orders échouée !'));

module.exports = app;