const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  //쿼리에 write 쿼리가 들어왔을 때 post/edit 페이지로 전달하고 있다
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  //쿼리에 write가 없다면, 게시글 목록을 찾아서 post/list 템플릿으로 찾은 {posts} 게시글을 전달해주고 있다
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
});

router.get('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;

  // shortId 로 게시글 찾기
  const post = await Post.findOne({
    shortId,
  });
  
  //query에 edit이 있다면, edit 페이지로
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  //없다면 view 페이지로 전달
  res.render('post/view', { post });
});

router.post('/', async (req, res, next) => {
  const { title, content } = req.body;
  
  //title과 content가 비어있다면 입력해달라고 ㅇㅇ
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    //오류가 없다면 게시글 생성
    const post = await Post.create({
        title,
        content,
    });

    //전달받은 post에 shortId로 post.shortId해서 redirect해주고 있음
    //redirect부분 : 게시글의 상세페이지
    //작성된 게시글을 바로 게시글의 상세페이지로 보내준다 라고 생각하면 됨
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) { //위에 try에서 오류가 생겼을 경우 catch로 오류 넘겨서 ㅇㅇ
    next(err);
  }
});

// url posts/:shortId로 갔을 경우
router.post('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  try { //둘다 비어있다면,
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    // 오류가 없다면 shortId 로 게시글 수정
    //shortId를 받아서 그 내용을 title, content로 변경하겠다
    await Post.updateOne({ shortId }, {
        title,
        content,
    });

    //updateOne이 제대로 수행되었다면 redirect
    //방금 수정한 게시글의 상세로 redirect하겠다
    res.redirect(`/posts/${shortId}`);
  } catch (err) { // 오류 처리
    next(err);
  }
});


router.delete('/:shortId', async (req, res, next) => {

  //req.params로 shortId 받음
  // = path parameter로 shortId 받음
  const { shortId } = req.params;

  // shortId 로 게시글 삭제
  await Post.deleteOne({ shortId });

  //정상적으로 수행되었다고 ok ~!
  res.send('OK');
});

module.exports = router;