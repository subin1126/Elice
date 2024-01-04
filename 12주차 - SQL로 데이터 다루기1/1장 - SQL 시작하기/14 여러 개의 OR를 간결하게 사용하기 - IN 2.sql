-- 해당하는 이름을 가진 사람들만 골라서 출력합니다.

select *
from employees
where last_name in ('Michaels', 'Genin', 'Peha');