// 웹 서버를 만들고 화면에 "테스트를 시작하겠습니다!"를 출력하세요.
const http = require('http');
const port = 8080;

// 서버는 8080번 포트로 서버를 여세요.

const server = http.createServer(function (req, res) {
  req.on('error', err => {
    console.errer(err.stack);
  });
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.end('테스트를 시작하겠습니다!');
});

server.listen(port, function () {
  console.log('Server is running...');
});
