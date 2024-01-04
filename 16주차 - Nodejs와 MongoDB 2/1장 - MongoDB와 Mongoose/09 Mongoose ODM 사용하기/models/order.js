const mongoose = require('mongoose');
const connection  = require('../util/database');
const Customer = require('./customer');

const orderShema = new mongoose.Schema({
  total: {
    type: Number,
    required: true
  },
  customer_id: {
    type: mongoose.Schema.ObjectId,
    ref: Customer,
    required: true,
    index: true
  }
});

//2. Order를 export하기 위해 model 에 전달하세요.
const Order = connection.model('Order', orderShema);

module.exports = Order;

//module.exports = mongoose.model('Order', orderShema);