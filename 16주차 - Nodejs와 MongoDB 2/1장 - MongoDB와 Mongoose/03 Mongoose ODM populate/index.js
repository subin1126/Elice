const mongoose = require('mongoose');
const { Post } = require('./models');

mongoose.connect("mongodb://localhost:27017/exam_6");

async function main() {
  const posts = await Post.find({}).populate('author'); // populate 사용하기
  return posts;
}

module.exports = main;