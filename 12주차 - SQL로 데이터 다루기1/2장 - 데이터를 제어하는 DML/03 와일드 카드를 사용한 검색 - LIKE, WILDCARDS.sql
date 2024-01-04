-- 아래에 hire_date에 7이 들어가는 직원을 조회하는 쿼리를 작성해주세요.

select *
from employees
where hire_date like '%7%';