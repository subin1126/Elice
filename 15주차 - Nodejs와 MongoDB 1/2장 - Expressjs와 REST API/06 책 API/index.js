const express = require("express");

// books 라우터를 불러오고, "/books" 경로에 연결하세요.
const bookRouter = require('./routes/books');

const app = express();

app.get("/", (req, res) => {
  res.send("root page");
});

app.use('/books', bookRouter);

// 라우터에서 던진 에러 메시지를 처리하는 미들웨어를 만드세요.
app.use((err, req, res, next) => {
    res.status(500);
    res.json(
        {
            result: "fail",
            error: err.message,
        }
    )
});

app.listen(8080);
