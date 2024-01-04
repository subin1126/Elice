const mongoose = require("mongoose");
const { Schema } = mongoose;

//userSchema는 사용자 데이터가 어떤 구성으로 들어가는지 지정합니다.
const userSchema = new Schema(
  {
    //이메일과 이름, 나이의 구성을 지정하세요.
    enrolled: {
      type: Date,
      default: Date.now,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

//mongoDB에게 userSchema가 사용자 정보라는것을 알려주기 위함
module.exports = mongoose.model("User", userSchema);
