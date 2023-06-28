const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const deliverySchema = mongoose.Schema({
    _id: { type: ObjectId, required: true},
    //deliveryId: { type: String, required: true },
    delivererId: { type: String, required: true },
    deliveryAdress: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    orderId: { type: String, required: true }
});

module.exports = mongoose.model('delivery', deliverySchema);