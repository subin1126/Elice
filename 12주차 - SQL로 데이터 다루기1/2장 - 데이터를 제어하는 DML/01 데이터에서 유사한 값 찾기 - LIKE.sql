-- 아래에 hire_date가 1997-07-07인 직원만 조회하는 쿼리를 작성해주세요.

select *
from employees
where hire_date like '1997-07-07';

select *
from employees
where hire_date = '1997-07-07';