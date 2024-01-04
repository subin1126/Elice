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

// 작품 정보를 수정하는 API를 작성하세요.
router.put('/:show_id', async (req, res) => {
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

module.exports = router;
