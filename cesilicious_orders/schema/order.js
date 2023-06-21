const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId: { type: String, required: true },
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    ordersDetails: { type: Object, required: true },
    orderPayment: { type: Object, required: true },
    orderStatus: { type: String, required: true },
    orderDate: { type: String, required: true },
    orderAddress: { type: String, required: true },
    delivererId: { type: String, required: true }
});

module.exports = mongoose.model('order', orderSchema);