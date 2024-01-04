-- 1. MEMBER 테이블과 MEMBER_DTL 테이블에 대해서 JOIN 구문을 활용해, 멤버ID, 멤버이름, 멤버등급을 출력해주세요.
select a.member_id, member_name, member_grade
from MEMBER a LEFT OUTER JOIN MEMBER_DTL b
on a.member_id = b.member_id
order by member_id asc;

-- 2. 위의 쿼리에 대해서 등급이 없거나, BRONZE등급인 고객만 출력하는 쿼리를 작성해주세요.
select a.member_id, member_name, member_grade
from MEMBER a LEFT OUTER JOIN MEMBER_DTL b
on a.member_id = b.member_id
where member_grade IS NULL or member_grade = 'BRONZE'
order by member_id asc;


