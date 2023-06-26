const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const postRestaurantRouter = require('./routes/postRestaurant');
const getRestaurantsRouter = require('./routes/getRestaurants');
const getRestaurantByRestaurantIdRouter = require('./routes/getRestaurantByRestaurantId');
const putRestaurantByRestaurantIdRouter = require('./routes/putRestaurantByRestaurantId');
const deleteRestaurantByRestaurantIdRouter = require('./routes/deleteRestaurantByRestaurantId');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/restaurants', postRestaurantRouter);
app.use('/restaurants', getRestaurantByRestaurantIdRouter);
app.use('/restaurants', getRestaurantsRouter);
app.use('/restaurants', putRestaurantByRestaurantIdRouter);
app.use('/restaurants', deleteRestaurantByRestaurantIdRouter);

module.exports = app;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cesilicious'
    })
  .then(() => console.log('Connexion à MongoDB Restaurants réussie !'))
  .catch(() => console.log('Connexion à MongoDB Restaurants échouée !'));

module.exports = app;