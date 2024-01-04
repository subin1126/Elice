const { Schema } = require("mongoose");

// 지시사항을 참고하여 댓글 데이터를 저장하는 스키마를 정의하세요.
const CommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    target: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = CommentSchema;
