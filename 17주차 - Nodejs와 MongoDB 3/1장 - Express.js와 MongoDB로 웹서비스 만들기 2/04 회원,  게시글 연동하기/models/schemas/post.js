const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    // index 추가하기
    index: true,
  },
}, {
  timestamps: true,
});

module.exports = PostSchema;