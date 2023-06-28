const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: { type: ObjectId, required: true},
    //restaurantId: { type: String, required: true },
    restaurantName: { type: String, required: true },
    picture: { type: String, required: false },
    schedules: { type: String, required: true },
    note: { type: Number, required: false },
    maxDeliveryTime: { type: String, required: false },
    //estimatedAverageDelivery: { type: String, required: true },
    meansOfPaymentAccepted: { type: Array, required: true },
    type: { type: Array, required: true },
    articles: { type: Array, required: true },
    menus: { type: Array, required: true }
});

module.exports = mongoose.model('restaurant', restaurantSchema);