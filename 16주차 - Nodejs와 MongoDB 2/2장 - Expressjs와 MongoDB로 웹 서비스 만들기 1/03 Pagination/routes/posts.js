const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncHandler(async (req, res) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  // url 쿼리에서 page 받기, page가 없다면 기본값 1
  const page = Number(req.query.page || 1);

  // url 쿼리에서 peRage 받기, 기본값 10
  const perPage = Number(req.query.perPage || 10);
  
  // 전체 게시글 수 쿼리하기

  //countDocuments 함수는 몽구스를 사용하여 몽고디비에서 Post 모델에 해당하는 모든 문서의 수를 셀 때 사용하는 메서드이다
  //여기서 Post는 ..models 경로에서 가져온 Post 모델을 말함
  //몽고 디비 쿼리를 사용하여 조건에 맞는 문서의 수를 가져오기 위해 사용됨
  //({}) find때 처럼 이렇게하면 모든 글의 수를 세어줌

//createdAt : Post모델에 timestamps 옵션을 사용하면 자동으로 createdAt, updatedAt 필드 값이 생성된대
//timestamps: true, 로 설정되어있어서 몽구스가 자동으로 생성 및 업데이트 시간을 처리한다
//여기서는 최신순으로 글을 정리하려고 createdAt (생성필드) -1 해서 역으로 정렬함

//   const total = await Post.countDocuments({});
//   const posts = await Post.find({})
//   .sort({ createdAt: -1 })
//   .skip(perPage * (page - 1))
//   .limit(perPage); // sort, skip, limit 사용하기
  
  //위에 주석 처리된 코드들을 이렇게 바꿀 수 있음!!
  // total, posts 를 Promise.all 을 사용해 동시에 호출하기
  const [total, posts] = await Promise.all([
      Post.countDocuments({}),
      Post.find({})
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
  ])

  const totalPage = Math.ceil(total / perPage);
  
  res.render('post/list', { posts, page, perPage, totalPage });
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
    throw new Error('제목과 내용을 입력 해 주세요');
  }

  const post = await Post.create({ title, content });
  res.redirect(`/posts/${post.shortId}`);
}));

router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  if (!title || !content) {
    throw new Error('제목과 내용을 입력 해 주세요');
  }
    
  await Post.updateOne({ shortId }, { title, content });
  res.redirect(`/posts/${shortId}`);
}));

router.delete('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  await Post.deleteOne({ shortId });
  res.send('OK');
}));

module.exports = router;