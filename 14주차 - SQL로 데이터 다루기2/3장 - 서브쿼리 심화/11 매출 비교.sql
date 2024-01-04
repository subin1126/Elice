-- 아래는 STORE 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC STORE;

select * from STORE;
-- 1. 남부 지역 가게들의 매출액을 조회하는 쿼리를 작성해봅시다.
select sales_amount
from STORE
where store_location = '남부'
order by sales_amount asc;

-- 2. 남부 지역의 모든 가게보다 매출이 높은 가게를 조회하는 쿼리를 작성해봅시다.
select store_id, store_name, store_location, sales_amount
from STORE
where sales_amount > ALL (
    select sales_amount
    from STORE
    where store_location = '남부'
    order by sales_amount asc
)
ORDER BY store_id asc;
