const mongoose = require("mongoose");
const express = require("express");
const server = express();

server.listen(8080, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("start the server successfully");

    //1. 서버가 호출되었으면 mongoose를 사용해서 MongoDB를 연결하세요.
    mongoose.connect('mongodb://localhost:27017');

    mongoose.connection.on('connected', () => {
        console.log('connected to database successfully');
    })
  }
});
