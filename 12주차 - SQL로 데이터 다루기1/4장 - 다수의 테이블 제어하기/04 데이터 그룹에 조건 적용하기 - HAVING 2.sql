-- salaries 테이블에서 emp_no과 직원별로 연봉을 받은 횟수를 조회하되 연봉을 10번 이상 받은 직원만 조회해보세요.

select emp_no, count(*) from salaries;

select emp_no, count(*) from salaries group by emp_no;

select emp_no, count(*)
from salaries
group by emp_no
having count(salary) >= 10;