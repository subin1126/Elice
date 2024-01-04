const { Router } = require('express');

const router = Router();

//root 라우트는 기본적으로 index라는 페이지로 렌더해주고있다
// router.get('/', (req, res) => {
//   res.render('index');
// });
//그런데 /posts 페이지로 redirect해달라했으니 다시짬
// views의 index.pug와 연결되어져 있음

router.get('/', (req, res) => {
    res.redirect('/posts');
});


module.exports = router;