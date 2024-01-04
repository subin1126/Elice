//1. mongoose를 import 하세요.
const mongoose = require('mongoose');
const express = require("express");
const server = express();

server.listen(8080, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("trying database connect");
    //2. `mongoose.connect('')` 를 사용해서 mongoDB 데이터베이스에 연결하세요.
    //3. 데이터베이스 연결 시 에러가 발생하면 console에 에러메시지를, 성공하면 `mongoose.connect('')` 내에 mongoDB 형식인 URL을 전달해서 mongoDB 데이터베이스를 연결하세요. 그리고 "connected to database succesfully"를 콘솔에 출력하세요.
    mongoose.connect('mongodb://localhost:27017/simpleBoard');

    mongoose.connection.on('connected',  () => {
        console.log('connected to database successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Error');
    });

  }
});
