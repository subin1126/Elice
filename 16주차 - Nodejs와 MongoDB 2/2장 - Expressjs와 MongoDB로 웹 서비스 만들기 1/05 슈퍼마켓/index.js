const express = require("express");
const mongoose = require("mongoose");

const snackRouter = require("./routes/snacks");

const app = express();

mongoose.connect("mongodb://localhost:27017/supermarket");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root page");
});

app.use("/snacks", snackRouter);

app.listen(8080);
