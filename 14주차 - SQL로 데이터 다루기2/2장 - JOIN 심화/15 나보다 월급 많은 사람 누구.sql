-- EMPLOYEE 테이블에 대해 셀프조인을 활용하여 상사급여보다 자신의 급여가 높은 직원을 조회해봅시다.

select a.employee_id, a.name, a.salary, b.name, b.salary
from EMPLOYEE as a join EMPLOYEE as b
on a.manager_id = b.employee_id
where a.salary > b.salary
order by a.employee_id asc;


