const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const { Post, User } = require('../models');

const router = Router();

router.get('/posts/:shortId/comments', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ shortId });
  
  //comments안에 각각의 author에 user가 objId로 검색이 돼서 주입이 됨
  await User.populate(post.comments, { path: 'author '});
  // post.comments 의 작성자 populate 하기
  // json 으로 응답 보내기
  res.json(post.comments);

}));

router.post('/posts/:shortId/comments', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { content } = req.body;
  const author = await User.findOne({ shortId: req.user.shortId });
  
  // $push operator 사용하여 댓글 추가하기
  await Post.updateOne({
      shortId,
  }, {
      //comments: [...post.comments, { ~ }]이렇게 추가하는 것이 아니라
      $push: { comments: { content, author }},
  });

    res.json({ result: 'success' });
}));

module.exports = router;