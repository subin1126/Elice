const { Router } = require("express");
const { Book } = require("../models");

const router = Router();

// "/" 경로에서 전체 책 데이터를 DB에서 찾아 반환하세요.
router.get('/', async (req, res) => {
    const books = await Book.find({});

    res.json(books);
})

// "/:id" 경로에서 입력된 id에 해당하는 책 데이터를 DB에서 찾아 반환하세요.
router.get('/:id', async (req, res) => {
    const search_id = req.params.id;
    const book = await Book.find({id: search_id});

    res.json(book);
});

module.exports = router;

