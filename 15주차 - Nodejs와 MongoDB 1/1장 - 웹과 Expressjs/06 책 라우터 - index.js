// express로 app 객체를 생성하고, 8080포트로 서버를 여세요.
const express = require('express');
const app = express();

const bookRouter = require('./routes/books.js');

app.get('/', (req, res) => {
    res.send('root pages');
});


app.use('/books', bookRouter);

app.listen(8080);



