const http = require("http");
const port = 8080;

// createServer()는 request와 response이라는 두 개의 매개변수가 있는 함수입니다.
// http에 request 요청을 했을때, 이 함수 내부에서 서버의 모든 활동을 처리합니다.
const server = http.createServer(function (request, response) {
  request.on("error", (err) => {
    // 에러가 발생하면 오류 메시지와 스택 트레이스를 출력합니다.
    console.error(err.stack);
  });
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("hello node");
});

// 원하는 Port번호를 수신하도록 서버를 설정합니다.
// 위에 정의된 server 객체에 listen() 메소드를 사용해 8080포트에서 수신을 시작합니다.
server.listen(port, function () {
  console.log("Server is running...");
});
