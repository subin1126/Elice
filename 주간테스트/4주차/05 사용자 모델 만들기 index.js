const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { User } = require("./models");

app
  .get("/", (req, res) => {
    const newUser = new User();
    newUser.email = "mong@gmail.com";
    newUser.name = "mong";
    newUser.age = 22;
    newUser
      .save()
      .then((user) => {
        console.log(user);
        res.json({
          message: "User created successfully",
        });
      })
      .catch((err) => {
        res.json({
          message: "not created",
        });
      });
  })
  .listen(8080, (err) => {
    {
      if (err) {
        console.log("err");
      } else {
        console.log("connected to database succesfully");
        mongoose.connect("mongodb://localhost:27017/userBoard", (err) => {
          if (err) {
            console.log("err");
          } else {
            console.log("connected to database succesfully");
          }
        });
      }
    }
  });
