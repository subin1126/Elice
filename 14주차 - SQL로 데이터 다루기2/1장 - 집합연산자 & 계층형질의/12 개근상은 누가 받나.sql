-- 지각 이력이 없는 학생의 학생번호를 조회하는 쿼리를 작성해보세요.

select student_id
from STUDENT
where student_grade = 1

except

select student_id
from LATE_CHECK_LIST
where late_check_id > 0

order by student_id asc;