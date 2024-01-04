-- 1. 2개의 커머스 사이트 상관없이 구매할 수 있는 상품이름의 목록을 조회해 봅시다.
select product_name
from COMMERCE_A
where product_stock > 0

UNION

select product_name
from COMMERCE_B
where product_stock > 0

order by product_name asc;

-- 2. 2개의 커머스 사이트에서 공통적으로 구매할 수 있는 모든 상품이름의 목록을 조회해 봅시다.
select product_name
from COMMERCE_A
where product_stock > 0

intersect

select product_name
from COMMERCE_B
where product_stock > 0

order by product_name asc;
