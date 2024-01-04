var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
const port = 8080;

var server = http
  .createServer(function (req, res) {
    if (req.method == 'GET') {
      fs.readFile('./index.html', 'utf8', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
    //1.요청 방식이 POST일 경우에 index.html 파일을 웹에 띄워주세요. (true를 수정하세요.)
    else if (req.method == 'POST') {
      req.on('data', function (chunk) {
        console.log(chunk.toString());
        //2. form에서 받은 데이터를 .parse()와 toString()을 사용해서 객체로 반환하세요. (null을 대체하세요.)
        var data = querystring.parse(chunk.toString());
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //3. res.end()를 사용해서 login 페이지에 data.id, data.pw를 출력하세요.
        res.end('id: ' + data.id + ', pw: ' + data.pw);
      });
    }
  })
  .listen(port, function () {
    console.log('Server is running...');
  });
