-- 각 부서별 나이가 제일 많은 사원을 조회하는 쿼리를 작성해주세요.

-- min(birthdate) 하면 4개의 값이 나올거아님
-- 그거 일일이 or 연산 => any
-- 일일이 and 연산 => all
-- in은 걍 하나라도 만족하면 true라서 반환

select *
from emp
where birthdate in ( select min(birthdate) from emp group by deptno);

-- 저 중 하나만 해당해도 되니까 or
select *
from emp
where birthdate = any ( select min(birthdate) from emp group by deptno);

-- 모두를 만족하는 값은 없기 때문에 답이 안나옴 and
select *
from emp
where birthdate = all ( select min(birthdate) from emp group by deptno);


