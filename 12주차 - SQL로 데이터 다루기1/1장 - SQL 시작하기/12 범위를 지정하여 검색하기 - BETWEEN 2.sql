-- 1980~1989년도에 입사한 직원을 검색하세요.

select *
from employees
where hire_date between '1980-01-01' and '1989-12-31';

-- 1990~1999년도에 입사한 직원을 검색하세요.
select *
from employees
where hire_date between '1990-01-01' and '1999-12-31';

