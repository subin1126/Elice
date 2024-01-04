-- 아래는 ELICE_MART 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC ELICE_MART;
DESC PRODUCT;

-- 1. ELICE_MART 에서 재고가 0인 상품에 대해 조회하는 쿼리를 작성하세요.
select product_id, product_name
from ELICE_MART
WHERE stock = 0
ORDER BY product_id asc;

-- 2. ELICE_MART 에서는 재고가 0이고, PRODUCT 에서는 재고가 0 초과인 상품에 대해 조회하는 쿼리를 작성하세요.

select product_id, product_name
from PRODUCT
where stock >= 1
AND (product_id, product_name) in (
    select product_id, product_name
    from ELICE_MART
    WHERE stock = 0
)
order by product_id asc;


-- select product_id, product_name
-- from ELICE_MART
-- WHERE stock = 0 and (product_id, product_name) in
-- (
--     select product_id, product_name
--     from PRODUCT
--     where stock >= 1
-- )
-- order by product_id asc;


  

