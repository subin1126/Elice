/*실습 6번에서 routes - contents.js만 변경 */

const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

// 특정 작품을 조회하는 API를 구현하세요.
router.get('/:show_id', async (req, res) => {
    const search_id = req.params.show_id;
    const content = await Content.find({ show_id: search_id });

    res.json(content);
});

module.exports = router;