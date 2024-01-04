-- 아래 쿼리는 book_store_a, book_store_b 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC book_store_a;
DESC book_store_b;

-- 1. book_store_a 테이블에서 재고(stock)가 0 초과인 데이터의 책의이름(book_name)을 조회하는 쿼리를 작성하세요.
select book_name
from book_store_a
where stock > 0;

-- 2. book_store_b 테이블에서 재고(stock)가 0 초과인 데이터의 책의이름(book_name)을 조회하는 쿼리를 작성하세요.
select book_name
from book_store_b
where stock > 0;

-- 3. 위 2개의 쿼리에 대해서 집합 연산자를 이용하여 book_store_a에만 존재하는 데이터를 조회하세요.
select book_name
from book_store_a
where stock > 0
except
select book_name
from book_store_b
where stock > 0
order by book_name;
