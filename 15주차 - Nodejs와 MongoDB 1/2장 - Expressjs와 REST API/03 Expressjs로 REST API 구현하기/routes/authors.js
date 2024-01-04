const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

// 작성자 목록 API("/")와 특정 작성자의 메모 출력 API("/:author/notes")를 구현합니다.
router.get('/', (req, res, next) => {
    const list = Note.authorList();
    res.send(list);
});

router.get('/:author/notes', (req, res, next) => {
      // URL에서 :author 부분을 추출하여 author 변수에 저장
    const { author } = req.params;

    try {
        // 작성자(author)에 해당하는 노트 목록을 가져옴
        const notes = Note.findByAuthor(author);
        res.json(notes);
    } catch(e) {
        next(e);
    }
});


module.exports = router;