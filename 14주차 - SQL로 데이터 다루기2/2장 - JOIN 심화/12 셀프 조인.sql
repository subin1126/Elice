-- 아래 쿼리는 EMPLOYEE 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC EMPLOYEE;

-- EMPLOYEE 테이블을 SELF JOIN하여 사원ID, 사원이름, 관리자이름을 조회하는 쿼리를 작성해보세요.

select a.employee_id, a.employee_name, b.employee_name as manager_name
from EMPLOYEE as a, EMPLOYEE as b
where a.manager_id = b.employee_id
order by employee_id asc;
