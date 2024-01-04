const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
const UserSchema = require('./schemas/user');

exports.Post = mongoose.model('Post', PostSchema);
// User 모델 생성
//지시사항에서 모델의 이름은 User라고 해달라했기 때문에 이렇게 짬
exports.User = mongoose.model('User', UserSchema);