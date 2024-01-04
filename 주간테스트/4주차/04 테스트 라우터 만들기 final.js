function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('기말고사입니다.');
  }
  
  module.exports = {
    handleRequest: handleRequest,
  };
  