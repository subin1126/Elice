var http = require('http');
var fs = require('fs');
const port = 8080;
var midterm = require('./routes/midterm.js');
var final = require('./routes/final.js');

http
  .createServer(function (req, res) {
    if (req.method === 'GET') {
      if (req.url === '/midterm') {
        midterm.handleRequest(req, res);
      } else if (req.url === '/final') {
        final.handleRequest(req, res);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('테스트를 시작하겠습니다!');
      }
    }
  })

  .listen(port, function () {
    console.log('Server is running...');
  });
