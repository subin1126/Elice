-- 연봉에 대한 정보를 employees 테이블과 연결해 조회하되 employees 테이블을 중심으로 조회해보세요.

select *
from salaries
right join employees
on salaries.emp_no = employees.emp_no
;