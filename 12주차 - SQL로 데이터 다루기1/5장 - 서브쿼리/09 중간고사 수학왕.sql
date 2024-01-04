-- 1. 경민이보다 중간고사 수학점수를 높거나 같게 받은 학생들을 조회해 주세요.

select * from middle_test where student_id = 10504; -- 경민이

--경민이 수학점수
select math from middle_test where student_id = 10504;

select *
from middle_test as M
inner join students as S
on M.student_id = S.student_id
where M.math >=
(
    select math from middle_test where student_id = 10504
);
