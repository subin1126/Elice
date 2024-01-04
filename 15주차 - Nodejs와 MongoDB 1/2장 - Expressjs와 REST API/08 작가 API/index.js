const express = require("express");

// authors 라우터를 불러오고, "/authors" 경로에 연결하세요.
const bookRouter = require("./routes/books");
const authorRouter = require('./routes/authors');

const app = express();

app.get("/", (req, res) => {
  res.send("root page");
});

app.use("/books", bookRouter);

app.use('/authors', authorRouter);

app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    result: "fail",
    error: err.message,
  });
});

app.listen(8080);
