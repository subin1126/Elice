-- 아래는 EMPLOYEE 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC EMPLOYEE;

-- 자신의 관리자의 급여보다 높거나 같은 급여를 가진 직원의 ID를 출력하는 쿼리를 작성해봅시다.

select a.employee_id
from EMPLOYEE a
where a.salary >= (
    select salary
    from EMPLOYEE b
    where a.manager_id = b.employee_id
)
ORDER BY employee_id ASC;

