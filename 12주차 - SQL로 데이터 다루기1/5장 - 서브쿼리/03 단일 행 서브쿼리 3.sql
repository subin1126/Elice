SELECT * FROM emp;
-- 부서번호가 40인 부서의 급여 평균보다 높게 받는 사원들의 모든 컬럼과 나이를 조회하는 쿼리를 작성해주세요.


select *, FLOOR( (CAST(REPLACE(CURRENT_DATE,'-','') AS UNSIGNED) - 
       CAST(REPLACE(birthdate,'-','') AS UNSIGNED)) / 10000 ) as age

from emp
where sal > (select avg(sal) from emp where deptno = 40);



--엑 강사님 다르게 푸셨어,, 나중에 다시보쟈,, 홀홀,,,
select *, 2024 - Year(birthdate)