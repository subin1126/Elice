const crypto = require('crypto');

module.exports = (password) => {
  const hash = crypto.createHash('sha1');
  hash.update(password);
  return hash.digest("hex"); //16진수 String으로 보내줌
}