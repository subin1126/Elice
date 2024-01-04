// 생성한 사용자 스키마를 바탕으로 User 모델을 생성하세요.const mongoose = require("mongoose");

const mongoose = require("mongoose");
const UserSchema = require("./schemas/user");

exports.User = mongoose.model("User", UserSchema);