const { Schema } = require('mongoose');

// PostSchema 정의하기
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
}, {
  timestamps: true,
})

module.exports = PostSchema;