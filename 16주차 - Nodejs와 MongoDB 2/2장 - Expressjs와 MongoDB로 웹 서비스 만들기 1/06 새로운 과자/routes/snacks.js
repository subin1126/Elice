const { Router } = require("express");
const { Snack } = require("../models");

const router = Router();

// 새로운 과자를 추가하는 API를 만드세요.

// 과자의 name, price, company를 body를 통해 전달 받으세요.
  // DB에 동일한 name이 존재하는 경우 에러 메시지를 반환하세요.
  // DB에 동일한 name이 존재하지 않는 경우 새로운 과자를 DB에 삽입하세요.

router.post('/', async (req, res) => {
    try{
        const { name, price, company } = req.body;

        /*Sequelize를 사용하여 데이터베이스에서 과자이름 name을 기준으로 데이터를 조회하는 부분임
        
        Snack: Sequelize 모델 객체
        이 모델은 데이터베이스 테이블과 매핑되며, 데이터베이스와 상호작용하는데 사용된다
        
        findOne은 Sequelize에서 제공하는 메서드 중 하나
        이 메서드는 데이터베이스에서 조건을 만족하는 첫번째 레코드를 검색한다
        여기서는 name 필드를 기준으로 검색한다
        
        {where: {name}}은 findOne 메서드의 인자로 전달되는 객체
        이 객체는 검색 조건을 정의한다
        여기서는 name 필드가 name 변수와 일치하는 레코드를 찾으려고 한다
        즉, 과자 이름이 name 변수와 동일한 레코드를 검색하려고 한다
        
        이 코드는 데이터베이스에서 과자 이름을 검색하고, existSnack 변수에 그 결과를 할당한다
        이후에는 existSnack 변수를 사용하여 데이터베이스에서 과자이름이 이미 존재하는지 여부를 확인하고, 그에 따른 처리를 수행할 수 있다 */
        const existSnack = await Snack.findOne({ where: { name }});

        if(existSnack) {
            return res.status(400).json({
                status: 'Error',
                error: '이미 존재하는 과자 이름입니다.',
            });
        }

        const snacks = await Snack.create({name, price, company});

        res.json(snacks);
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            err: '서버 오류가 발생했습니다.',
        });
    }
});


module.exports = router;
