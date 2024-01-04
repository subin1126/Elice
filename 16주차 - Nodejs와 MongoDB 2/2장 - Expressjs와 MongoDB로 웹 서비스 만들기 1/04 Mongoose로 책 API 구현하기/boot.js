const mongoose = require('mongoose');
const { Book } = require('./models');

mongoose.connect("mongodb://localhost:27017/myLibrary");

// 샘플 책 데이터를 등록합니다.
async function boot() {
  let books = [
  { id: 1,  title: "War and Peace", author: "Leo Tolstoy" },
  { id: 2,  title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { id: 3,  title: "The Republic", author: "Plato" },
  { id: 4,  title: "Meditations", author: "Marcus Aurelius" },
  { id: 5,  title: "Anna Karenina", author: "Leo Tolstoy" },
  { id: 6, title: "A Farewell to Arms", author: "Ernest Hemingway" },
];

  await Book.create(books);
}

boot()
  .then(() => process.exit());

