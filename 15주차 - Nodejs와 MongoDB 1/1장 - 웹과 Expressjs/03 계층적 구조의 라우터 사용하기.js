const { Router } = require('express');
const petsRouter = require('./pets'); /*petsRouter 모듈 호출 */
const router = Router();

/*index.js에서 users부른게 여기서 처리 중임 */
router.get('/', (req, res) => {
    res.send('GET /users');
});

/* /:userId/pets 경로에 petsRouter 연결 
use함수에 path parameter를 사용한 경로, petsRouter 연결

users경로 하위에 userId/pets 경로를 petsRouter가 처리하도록 설정됨*/
router.use('/:userId/pets', petsRouter);

module.exports = router;