SELECT * FROM emp;
-- 사원 번호가 7인 사원보다 나이가 어린 사원의 모든 컬럼을 조회 하는 쿼리를 작성하세요.

select *
from emp
where birthdate >
(select birthdate from emp where empnum = 7);