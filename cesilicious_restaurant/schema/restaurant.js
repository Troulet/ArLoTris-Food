const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    restaurantId: { type: String, required: true },
    restaurantName: { type: String, required: true },
    picture: { type: String, required: true },
    schedules: { type: String, required: true },
    estimatedAverageDelivery: { type: String, required: true },
    meansOfPaymentAccepted: { type: Array, required: true },
    articles: { type: Object, required: true },
    menus: { type: Object, required: true }
});

module.exports = mongoose.model('restaurant', restaurantSchema);