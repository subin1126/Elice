const mongoose = require('mongoose');
// PostSchema 로드하기
const PostSchema = require('./schemas/post');

exports.Post = mongoose.model('Post', PostSchema);// PostSchema로 모델 만들기