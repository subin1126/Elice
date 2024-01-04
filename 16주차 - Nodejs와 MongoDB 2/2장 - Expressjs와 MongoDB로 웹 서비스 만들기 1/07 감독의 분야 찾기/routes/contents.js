const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

// 감독 이름을 URI로 입력 받아, 감독이 어떤 타입의 작품을 주로 제작하는지 반환하는 API를 만듭니다.
router.get("/:directorName", async (req, res) => {
    try {
        const directorName = req.params.directorName;

        // Content 모델을 사용하여 감독 이름을 기준으로 작품을 검색합니다.
        const contents = await Content.findOne({ director: directorName });

        if (!contents) {
            // 감독 이름에 해당하는 작품이 없는 경우 에러 메시지를 반환합니다.
            return res.status(404).json({
                status: "Error",
                error: "감독 이름에 해당하는 작품이 없습니다.",
            });
        }

        // 검색된 작품의 타입을 확인하여 메시지를 생성합니다.
        let message = `${directorName} 감독은 `;
        if (contents.type === "Movie") {
            message += "영화 감독입니다.";
        } else if (contents.type === "TV Show") {
            message += "TV 프로그램 감독입니다.";
        } else {
            message += "알 수 없는 타입의 작품을 제작합니다.";
        }

        res.json({ status: "Success", message });
    } catch (error) {
        // 오류가 발생한 경우 에러 메시지를 반환합니다.
        res.status(500).json({
            status: "Error",
            error: "서버 오류가 발생했습니다.",
        });
    }
});

module.exports = router;
