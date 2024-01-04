const { Router } = require("express");
const { Snack } = require("../models");

const router = Router();

// 전체 과자 정보를 출력하는 API를 만드세요.
router.get('/', async (req, res) => {
    const snacks = await Snack.find({});

    res.json(snacks);
});

module.exports = router;
