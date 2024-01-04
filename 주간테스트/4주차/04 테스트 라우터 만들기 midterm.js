// "중간고사입니다."를 출력하는 라우터를 정의하고 export하세요.

function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('중간고사입니다.');
  }
  
  module.exports = {
    handleRequest: handleRequest,
  };
  