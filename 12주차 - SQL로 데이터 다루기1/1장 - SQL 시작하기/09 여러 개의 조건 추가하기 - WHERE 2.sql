-- 여자 직원 중 이름이 Chirstian인 직원들을 출력합니다.

desc employees;

select *
from employees
where gender = 'F' && first_name = 'Chirstian';
