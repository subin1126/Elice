-- 연봉에 대한 정보를 employees 테이블과 연결해 조회해 봅시다.


select *
from salaries
inner join employees
on salaries.emp_no = employees.emp_no;
;