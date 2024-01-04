SELECT * FROM emp;
-- 전 사원의 급여 평균보다 낮은 급여를 받는 사원의 모든 컬럼을 조회 하는 쿼리를 작성하세요.

select *
from emp
where sal < (select avg(sal) from emp);