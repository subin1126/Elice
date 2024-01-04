// Router를 이용해 GET 요청을 처리하는 API를 라우팅하세요.

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('some books');
});

module.exports = router;