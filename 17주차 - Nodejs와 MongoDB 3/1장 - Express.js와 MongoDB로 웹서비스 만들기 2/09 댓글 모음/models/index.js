const mongoose = require("mongoose");
const UserSchema = require("./schemas/user");
// 생성한 사용자 스키마를 바탕으로 Comment 모델을 생성 후 export하세요.
const CommentSchema = require('./schemas/comment');

exports.Comment = mongoose.model('Comment', CommentSchema);
exports.User = mongoose.model("User", UserSchema);