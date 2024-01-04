// Schema 모듈을 불러오고, 사용자 스키마를 정의한 뒤 export하세요.
const { Schema } = require("mongoose");

const UserSchema = new Schema({
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
});

module.exports = UserSchema;