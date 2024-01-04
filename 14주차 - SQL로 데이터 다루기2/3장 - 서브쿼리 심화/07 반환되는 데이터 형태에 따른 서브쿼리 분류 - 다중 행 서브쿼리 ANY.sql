-- 아래는 FOOD 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC FOOD;

select * from FOOD;
-- 음식타입이 Main인 임의의 음식의 가격보다 비싼 음식들을 조회해봅시다.
-- '임의의' => any

select food_id, food_type, food_name, price
from FOOD
where price > ANY (
    select price
    from FOOD
    where food_type = 'Main'
)
order by food_id asc;