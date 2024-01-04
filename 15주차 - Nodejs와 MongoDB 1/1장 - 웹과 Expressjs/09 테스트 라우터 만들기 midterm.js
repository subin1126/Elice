// "중간고사입니다."를 출력하는 라우터를 정의하고 export하세요.

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('중간고사입니다.');
});

module.exports = router;