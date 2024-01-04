const mongoose = require('mongoose');
const connection  = require('../util/database');

const customer = new mongoose.Schema({
 //1. json 형태로 customer의 이름과 이메일주소를 customer로 전달하세요.
 name: {
     type: String,
     required: true,
 },
 email: {
     type: String,
     required: true,
 },
 
});

//이거 util/database.js 여기서 connection으로 데이터에비스와 모듈 연결 방법을 정해놨기 때문에 connection으로 해야됨
//const Customer = connection.model('Customer', customer);
//module.exports = Customer;

module.exports = connection.model('Customer', customer);

//module.exports = mongoose.model('Customer', customer);