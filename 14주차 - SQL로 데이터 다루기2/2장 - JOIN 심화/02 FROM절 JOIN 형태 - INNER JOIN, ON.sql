-- 아래 쿼리는 STORE, STORE_TYPE_CODE 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC STORE;
DESC STORE_TYPE_CODE;

-- STORE 테이블과 STORE_TYPE_CODE 테이블에 대해 store_type_code 컬럼을 이용하여 조인을 실시해,
-- 가게이름(store_name)과 타입이름(store_type_name)을 조회하는 쿼리를 작성해보세요.

select store_name, store_type_name
from STORE a join STORE_TYPE_CODE b
on a.store_type_code = b.store_type_code
order by store_name asc;