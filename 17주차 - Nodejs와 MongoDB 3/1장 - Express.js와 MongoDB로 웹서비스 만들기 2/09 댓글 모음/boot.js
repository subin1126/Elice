const mongoose = require("mongoose");
const { Comment, User } = require("./models");

async function boot() {
  await mongoose.connect("mongodb://localhost:27017/post");
  const [elice, bob, kevin] = await User.create([
    { email: "rabbit@elice.com", name: "elice", age: 16 },
    { email: "hungry@elice.com", name: "bob", age: 19 },
    { email: "alone@elice.com", name: "kevin", age: 12 },
  ]);
  await Comment.create([
    {
      content: "정말 멋있어요.",
      writer: elice,
      target: kevin,
    },
    {
      content: "맛있어 보인다..!",
      writer: bob,
      target: elice,
    },
    {
      content: "오늘도 수고 많으셨어요^^",
      writer: kevin,
      target: elice,
    },
    {
      content: "잘보고 갑니다.",
      writer: kevin,
      target: bob,
    },
    {
      content: "또 만나요~",
      writer: kevin,
      target: elice,
    },
  ]);
}

boot()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error("데이터 생성이 실패했습니다", err);
    process.exit();
  });
