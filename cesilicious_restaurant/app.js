var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose')

var postRestaurantRouter = require('./routes/postRestaurant');
var getRestaurantsRouter = require('./routes/getRestaurants');
var getRestaurantByRestaurantIdRouter = require('./routes/getRestaurantByRestaurantId');
var putRestaurantByRestaurantIdRouter = require('./routes/putRestaurantByRestaurantId');
var deleteRestaurantByRestaurantIdRouter = require('./routes/deleteRestaurantByRestaurantId');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/restaurants', postRestaurantRouter);
app.use('/restaurants', getRestaurantByRestaurantIdRouter);
app.use('/restaurantstest', getRestaurantsRouter);
app.use('/restaurants', putRestaurantByRestaurantIdRouter);
app.use('/restaurants', deleteRestaurantByRestaurantIdRouter);

module.exports = app;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'CesiLicious'
    })
  .then(() => console.log('Connexion à MongoDB Restaurants réussie !'))
  .catch(() => console.log('Connexion à MongoDB Restaurants échouée !'));

module.exports = app;