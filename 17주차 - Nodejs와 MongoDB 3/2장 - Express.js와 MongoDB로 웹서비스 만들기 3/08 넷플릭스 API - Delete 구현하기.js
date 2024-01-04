const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

router.get("/:show_id", async (req, res) => {
  const search_id = req.params.show_id;
  const content = await Content.find({ show_id: search_id });
  res.json(content);
});

router.post("/", async (req, res) => {
  const { show_id, title, type, director } = req.body;

  const content = await Content.create({
    show_id,
    type,
    title,
    director,
  });
  res.json(content);
});

router.put("/:show_id", async (req, res) => {
  const { show_id } = req.params;
  const { title, type, director } = req.body;

  const content = await Content.updateOne(
    { show_id },
    {
      type,
      title,
      director,
    }
  );
  res.json(content);
});

// 작품을 삭제하는 API를 구현하세요.
router.delete('/:show_id', async (req, res) => {
    const { show_id } = req.params;

    const content = await Content.deleteOne({ show_id });
    res.send(content);
});

module.exports = router;
