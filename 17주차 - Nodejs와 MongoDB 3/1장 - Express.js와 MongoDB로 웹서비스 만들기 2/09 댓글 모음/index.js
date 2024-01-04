const mongoose = require("mongoose");
// Comment 모델을 불러오고, MongoDB에 연결하세요.
const { Comment } = require('./models');

mongoose.connect('mongodb://localhost:27017/post');

async function main() {
  // Comment에서 writer와 target을 populate하세요.
  const comments = await Comment.find({})
    .populate('writer')
    .populate('target');
  return comments;
}

// 아래 내용 수정 시 오답 처리가 될 수 있습니다.
main()
  .then((comments) => {
    for (let comment of comments) {
      if (!comment.writer.name || !comment.target.name) {
        console.error("comment가 populate 되지 않았습니다.");
        break;
      }
      console.log(
        `내용: ${comment.content} / 작성자: ${comment.writer.name} / 대상자: ${comment.target.name}`
      );
    }
    return;
  })
  .catch((err) => {
    console.error("에러가 발생했습니다.", err);
    return;
  })
  .finally(() => {
    process.exit();
  });
