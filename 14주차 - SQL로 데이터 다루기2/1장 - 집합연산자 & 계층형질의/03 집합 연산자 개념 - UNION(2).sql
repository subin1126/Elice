-- 아래 쿼리는 chicken_store, pizza_store 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC chicken_store;
DESC pizza_store;

-- 1. chicken_store에서 이용가능한 가게에 대해 가게이름만 출력하는 쿼리를 작성해보세요.
select store_name from chicken_store where available = 'Y';

-- 2. pizza_store에서 이용가능한 가게에 대해 가게이름만 출력하는 쿼리를 작성해보세요.
select store_name from pizza_store where available = 'Y';

-- 3. 위 2개의 쿼리에 대해서 집합 연산자를 이용하여 데이터 연결 및 정렬과 중복제거를 시행하는 쿼리를 작성하세요.
select store_name from chicken_store where available = 'Y'
union
select store_name from pizza_store where available = 'Y'
order by store_name asc;
