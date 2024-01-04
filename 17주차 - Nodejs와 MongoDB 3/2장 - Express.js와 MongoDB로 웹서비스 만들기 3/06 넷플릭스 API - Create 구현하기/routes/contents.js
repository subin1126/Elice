const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

// GET 요청을 하는 코드입니다. 수정하지 마세요!
router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

router.get("/:show_id", async (req, res) => {
  const search_id = req.params.show_id;
  const content = await Content.find({ show_id: search_id });
  res.json(content);
});

// 작품을 추가하는 API를 구현하세요.
router.post('/', async (req, res) => {
    const { show_id, title, type, director } = req.body;

    const content = await Content.create({ show_id, title, type, director });
    res.json(content);
});

module.exports = router;
