const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncHandler(async (req, res) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
}));

router.get('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ shortId });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
}));

router.post('/', asyncHandler(async (req, res) => {
  const { title, content } = req.body;
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }

    const post = await Post.create({ title, content });
    res.redirect(`/posts/${post.shortId}`);
  
}));

router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;

    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    await Post.updateOne({ shortId }, { title, content });
    res.redirect(`/posts/${shortId}`);
  }
));

router.delete('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  await Post.deleteOne({ shortId });
  res.send('OK');
}));

module.exports = router;

/*asyncHandler를 사용함으로 next를 이용한 try catch문으로 error를 잡는 일을 일일이 안해줘도돼서 코드도 간결해지고 가독성 좋아짐 */