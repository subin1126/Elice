const { Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
      type: Schema.Types.ObjectId, //populate하기 위해서 이렇게
      required: true,
      ref: 'User', // User 모델 생성할 때 이름!
  },
}, {
  timestamps: true,
})

module.exports = PostSchema;