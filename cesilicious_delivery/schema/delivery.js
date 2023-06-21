const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    deliveryId: { type: String, required: true },
    delivererId: { type: String, required: true },
    deliveryAdress: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    orderId: { type: String, required: true }
});

module.exports = mongoose.model('delivery', deliverySchema);