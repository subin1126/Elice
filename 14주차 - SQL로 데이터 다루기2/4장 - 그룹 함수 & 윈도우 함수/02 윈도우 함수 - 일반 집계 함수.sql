-- 아래는 PRODUCT, SELL 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC PRODUCT;
DESC SELL;

-- 1. SELL 테이블과 PRODUCT 테이블을 상품 ID 기준으로 INNER JOIN 하는 쿼리를 작성하세요.
select sell_id, seller_name, product_name, quantity
from SELL a inner join PRODUCT b
on (a.product_id = b.product_id)
order by sell_id asc;

-- 2. SUM 집계 함수를 이용하여, 판매자 이름, 상품 ID 별 판매 금액을 구하는 쿼리를 작성하세요.

select sell_id, seller_name, product_name, quantity,
sum(price * quantity)
over (PARTITION BY seller_name, a.product_id) as sum_price

-- , sum(price * quantity)
-- over (PARTITION BY seller_name) as total_sum_price

from SELL a inner join PRODUCT b
on (a.product_id = b.product_id)
order by sell_id asc;