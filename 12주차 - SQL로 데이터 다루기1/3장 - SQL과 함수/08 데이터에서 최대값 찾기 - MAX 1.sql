-- 학생들의 성적이 담겨있는 테이블의 구조를 조회합니다. 수정하실 필요는 없습니다.
DESC student;

select * from student;

-- 가장 높은 국어성적을 조회합니다.
select max(korean) from student;

SELECT COUNT(*)
FROM student
WHERE english = (SELECT min(english) FROM student);