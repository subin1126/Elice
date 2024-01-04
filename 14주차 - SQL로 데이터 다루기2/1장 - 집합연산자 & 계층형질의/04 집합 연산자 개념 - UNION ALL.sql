-- 아래 쿼리는 lecture_basic, lecture_special 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC lecture_basic;
DESC lecture_special;

-- 1. lecture_basic 테이블에서 강의이름(lecture_name)을 조회하는 쿼리를 작성하세요.
select lecture_name from lecture_basic;

-- 2. lecture_special 테이블에서 강의이름(lecture_name)을 조회하는 쿼리를 작성하세요.
select lecture_name from lecture_special;

-- 3. 위 2개의 쿼리에 대해서 집합 연산자를 이용하여 데이터를 연결하되 데이터의 중복제거를 시행하지 않는 쿼리를 작성하세요.
select lecture_name from lecture_basic
union all
select lecture_name from lecture_special
order by lecture_name asc;
