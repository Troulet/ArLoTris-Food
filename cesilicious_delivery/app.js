var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose')

var postDeliveryRouter = require('./routes/postDelivery');
var getDeliveryRouter = require('./routes/getDeliveryByDeliveryId');
var getDeliveriesRouter = require('./routes/getDeliveries');
var putDeliveryRouter = require('./routes/putDeliveryByDeliveryId');
var deleteDeliveryRouter = require('./routes/deleteDeliveryByDeliveryId');
var getDelivererRouter = require('./routes/deleteDeliveryByDelivererId');
var deleteDelivererRouter = require('./routes/deleteDeliveryByDelivererId');
var putDelivererRouter = require('./routes/deleteDeliveryByDelivererId');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/deliveries', postDeliveryRouter, getDeliveryRouter, getDeliveriesRouter, putDeliveryRouter, deleteDeliveryRouter);
app.use('/deliverer', getDelivererRouter, deleteDelivererRouter, putDelivererRouter);

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'CesiLicious'
    })
  .then(() => console.log('Connexion à MongoDB Deliveries réussie !'))
  .catch(() => console.log('Connexion à MongoDB Deliveries échouée !'));

module.exports = app;