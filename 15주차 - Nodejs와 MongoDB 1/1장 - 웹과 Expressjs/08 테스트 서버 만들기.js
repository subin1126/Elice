
// 웹 서버를 만들고 화면에 "테스트를 시작하겠습니다!"를 출력하세요.
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('테스트를 시작하겠습니다!');
});

// 8080번 포트로 서버를 여세요.
app.listen(8080);