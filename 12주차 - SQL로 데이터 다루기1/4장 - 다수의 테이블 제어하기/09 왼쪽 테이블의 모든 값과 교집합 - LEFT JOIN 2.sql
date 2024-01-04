-- 연봉에 대한 정보를 employees 테이블과 연결해 조회하되 salaries 테이블을 중심으로 조회해보세요.

select *
from salaries
left join employees
on salaries.emp_no = employees.emp_no;

-- select *
-- from employees
-- left join salaries
-- on employees.emp_no = salaries.emp_no;