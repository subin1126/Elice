const express = require("express");
const mongoose = require("mongoose");

const contentsRouter = require("./routes/contents");

const app = express();

mongoose.connect("mongodb://localhost:27017/netflix");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root page");
});

app.use("/contents", contentsRouter);

app.listen(8080);
