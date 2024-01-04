-- 문제의 조건에 맞는 직원을을 출력합니다.

select *
from employees
where 
(gender = 'M') &&
(first_name = 'Chirstian' || first_name = 'Georgi')
&& hire_date != ('1986-06-26');