const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: { type: ObjectId, required: true},
    userId: { type: String, required: true},
    //restaurantId: { type: String, required: true },
    restaurantName: { type: String, required: true },
    picture: { type: String, required: false },
    schedules: { type: String, required: true },
    note: { type: Number, required: false },
    maxDeliveryTime: { type: String, required: false },
    //estimatedAverageDelivery: { type: String, required: true },
    meansOfPaymentAccepted: { type: Array, required: true },
    type: { type: [String], required: true },
    city: { type: String, required: false },
    articles: { type: [String], required: true },
    menus: [{
        name: {type: String, required: false},
        price: {type: Number, required: false},
        picture: {type: String, required: false},
        articles: {type: [String], required: false}
    }]
});

module.exports = mongoose.model('restaurant', restaurantSchema);