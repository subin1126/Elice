const mongoose = require('mongoose');
const { Post } = require('./models');
// 몽고디비 연결
mongoose.connect("mongodb://localhost:27017/exam_5");

async function main() {
  const posts = await Post.find({
      //이렇게 배열로 전달해주면 알아서 in을 붙여줌 몽고디비는 ㅇㅇ
      //author: { $in: ['andy', 'bob', 'kate']} 로 자동으로 해줌
    author: ['andy', 'bob', 'kate'],
    likes: {
        $gt: 5,
        $lte: 10,
    },

    $or: [
        { category: {$exists: false} },
        { category: 'notice'},
    ],
  });
  return posts;
}

main()
  .then((posts) => {
    console.log("---검색 결과---");
    console.log(posts);
    console.log("---------------");
    return;
  })
  .catch(err => {
    console.error('에러가 발생했습니다.', err)
    return;
  })
  .finally(() => {
    process.exit();
  });