const { nanoid } = require('nanoid');
//nanoid = 패키지임

const shortId = {
  type: String,
  default: () => {
    return nanoid();
  },
  require: true,
  index: true,
}

module.exports = shortId;