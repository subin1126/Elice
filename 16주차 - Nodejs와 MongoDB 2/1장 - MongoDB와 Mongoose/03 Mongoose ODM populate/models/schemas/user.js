const { Schema } = require('mongoose');

const UserSchema = new Schema({
  // name, level 선언
  name: {
      type: String,
      required: true, //필수값이라는 뜻
  },

  level: {
      type: Number,
      required: true,
      default: 0,
  },
}, {
  timestamps: true,
})

module.exports = UserSchema;