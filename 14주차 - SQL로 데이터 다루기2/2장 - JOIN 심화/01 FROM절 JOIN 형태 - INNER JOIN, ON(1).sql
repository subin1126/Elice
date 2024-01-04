-- 아래 쿼리는 EMPLOYEE, POSITION_T 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC EMPLOYEE;
DESC POSITION_T;

-- EMPLOYEE 테이블과 POSITION_T 테이블에 대해 POSITION_ID가 같은 데이터에 대해
-- 사원번호(EMPLOYEE_ID)와 이름(NAME), 직급명칭(POSITION_NAME)을 조회하는 쿼리를 작성해보세요.

select EMPLOYEE_ID, NAME, POSITION_NAME
from EMPLOYEE a join POSITION_T b
on a.POSITION_ID = b.POSITION_ID
order by EMPLOYEE_ID asc;