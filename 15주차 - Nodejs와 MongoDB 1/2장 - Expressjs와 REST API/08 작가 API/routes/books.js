const { Router } = require("express");
const Book = require("../models/book");

const router = Router();


router.get("/", (req, res, next) => {
  const books = Book.list();
  res.json(books);
});


router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const book = Book.get(id);
    res.json(book);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
