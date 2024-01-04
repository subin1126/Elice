-- 지시사항을 만족하는 쿼리를 작성해보세요.

select dept, count(*)
from employees
group by dept;