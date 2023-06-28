const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const orderSchema = mongoose.Schema({
    _id: { type: ObjectId, required: true},
    //orderId: { type: String, required: true },
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    ordersDetails: { type: Array, required: true },
    price: { type: Number, required: true },
    orderPayment: { type: String, required: true },
    orderStatus: { type: String, required: true },
    orderDate: { type: Date, required: true },
    orderAddress: { type: String, required: true },
    delivererId: { type: String, required: false }
});

module.exports = mongoose.model('order', orderSchema);