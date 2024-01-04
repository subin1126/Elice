SELECT * FROM emp;
-- 각 부서별 급여를 제일 많이 받는 사원의 월급을 받는 사원들을 조회하는 쿼리를 작성해주세요.
select *
from emp
where sal in (select max(sal) from emp group by deptno);

select *
from emp
where sal = any (select max(sal) from emp group by deptno);



-- 이 코드는 각 부서에서 가장 많은 급여(max(sal))과 같은 급여를 받는 모든 사원을 출력
-- 예를들어, 10번 부서에서 사원이 받는 최고 급여가 2750인 경우 20번 부서에서 2750 급여를 받는 사원도
-- 쿼리에서 출력됨

-- 실제로 emp 테이블에서 각 부서별 급여를 제일 많이 받는 사원을 출력하기 위해서는
select e1.*
from emp as e1,
(select deptno, max(sal) as max_sal from emp group by deptno) as e2
where e1.sal = e2.max_sal
and e1.deptno = e2.deptno;

-- 이렇게 해야함
