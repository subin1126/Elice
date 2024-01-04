-- salaries 테이블에서 emp_no과 직원별로 연봉을 받은 횟수를 조회해보세요.


select emp_no, count(*) from salaries group by emp_no;