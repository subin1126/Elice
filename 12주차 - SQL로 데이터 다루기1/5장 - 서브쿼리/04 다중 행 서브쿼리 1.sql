SELECT * FROM emp;
-- MANAGER 업무를 가진 사원 중 제일 높은 급여를 받는 사원보다 높은 급여를 받는 사원을 조회하는 쿼리를 작성해주세요.




select *
from emp
where sal > all (select sal from emp where job = 'MANAGER');

select *
from emp
where sal > all (select max(sal) from emp where job = 'MANAGER');

select *
from emp
where sal > (select max(sal) from emp where job = 'MANAGER');

