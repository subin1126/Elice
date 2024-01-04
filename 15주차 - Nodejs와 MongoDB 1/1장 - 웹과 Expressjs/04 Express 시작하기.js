// express 모듈을 불러오세요.
const express = require('express');
const port = 8080;
const app = express();

// app 객체에 get()과 response.send를 이용해 웹 서버에 "Hello Elice!"를 출력하세요.
app.get('/', (req, res) => {
    res.send('Hello Elice!');
});

// 포트 번호를 정의하고, 8080번 포트로 서버를 여세요.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
