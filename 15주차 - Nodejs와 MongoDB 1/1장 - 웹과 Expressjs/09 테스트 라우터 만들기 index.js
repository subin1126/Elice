// 8080번 포트를 이용해 서버를 열고,routes 폴더에 있는 두 라우터를 등록하세요.
const express = require('express');
const midRouter = require('./routes/midterm.js');
const finalRouter = require('./routes/final.js');
const app = express();

app.get('/', (req, res) => {
    res.send('테스트를 시작하겠습니다!');
});

// midterm.js는 "/midterm" 경로에, final.js는 "/final" 경로에 연결하세요.
app.use('/midterm', midRouter);

app.use('/final', finalRouter);

app.listen(8080);
