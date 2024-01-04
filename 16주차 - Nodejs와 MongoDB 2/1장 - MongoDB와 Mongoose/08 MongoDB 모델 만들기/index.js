const mongoose = require("mongoose");
const express = require("express");
const server = express();
//2. models/User.js 모델을 불러옵니다.
const User = require('./models/User');

//3. `server.get()`을 사용해서 새로운 사용자를 생성합니다. 생성된 사용자 정보를 console에 띄우고 res.json()으로 "User created" 라는 메시지를 json 형태로 불러오세요.
//성공적으로 새로운 유저의 데이터가 저장이 되지 않을 경우에는 `catch()`를 통해 에러메시지를 띄우세요.
//서버에있는 정보를 불러오면 유저값을 만들때마다 고유의 id를 불러올수있습니다.

server.listen(8080, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("start the server succesfully");
    mongoose.connect("mongodb://localhost:27017/simpleBoard", (err) => {
      if (err) {
        console.log("err");
      } else {
        console.log("connected to database succesfully");
      }
    });
  }

  server.get('/', async (req, res) => {
  try {
    const newUser = new User(); //User 모델을 사용하여 새로운 사용자 객체 newUser 생성

    //새로운 사용자 객체 newUser의 속성 설정
    newUser.email = 'mong@gmail.com';
    newUser.name = 'mong';
    newUser.age = 22;

    //몽고디비에 newUser를 저장
    await newUser.save();

    //사용자가 성공적으로 생성되었을 때 콘솔에 메시지와 newUser 객체 출력
    console.log('User created successfully', newUser);

    //클라이언트에게 메시지와, 생성된 사용자 정보를 json 형식으로 응답
    res.json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

});
