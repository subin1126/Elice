-- 아래 쿼리는 student 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC student;

-- 순수 관계연산을 이용하여 student 테이블을 조회하는 쿼리를 작성해주세요.
select * from student;

-- 순수 관계 연산을 이용하여 student 테이블에서 grade가 3인 학생만 조회하는 쿼리를 작성해주세요.
select *
from student
where grade = 3;