/*실습 5번이랑 다 같은데 설명이 더 적혀있음 routes - api.js */

const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const { Post, User } = require('../models');

const router = Router();

router.get('/posts/:shortId/comments', asyncHandler(async (req, res) => {
    //요청의 url 파라미터로부터 shortId 값을 추출
  const { shortId } = req.params;

  //Post 모델을 사용하여 해당 shortId에 해당하는 포스트를 데이터베이스에서 찾는다
  const post = await Post.findOne({ shortId });
  
  // post.comments 의 작성자 populate 하기
  // post.comments 배열 내의 댓글 작성자 정보를 populate 한다
  // 이로써 댓글의 작성자 정보가 함께 반환된다

  //path는 몽구스에서 사용되는 populate 메소드의 옵션이다
  //이 옵션은 몽구스 모델에서 다른 모델과의 관계를 정의할 때 사용하는 필드 이름을 나타냄
  await User.populate(post.comments, {path: 'author'});
  res.json(post.comments);
}));

router.post('/posts/:shortId/comments', asyncHandler(async (req, res) => {
  const { shortId } = req.params;

  //요청 본문에서 content 값을 추출
  const { content } = req.body;

  //현재 사용자를 나타내는 req.user 객체에서 shortId를 사용하여 작성자 찾음
  const author = await User.findOne({ shortId: req.user.shortId });
  
  // $push operator 사용하여 댓글 추가하기
  await Post.updateOne({
      shortId,
  }, {
      //$push 연산자를 사용하여 해당 shortId에 해당하는
      //포스트의 comments 배열에 새로운 댓글을 추가한다
      $push: { comments: { content, author }},
  });
  
  res.json({ result: 'success' });
}));

module.exports = router;