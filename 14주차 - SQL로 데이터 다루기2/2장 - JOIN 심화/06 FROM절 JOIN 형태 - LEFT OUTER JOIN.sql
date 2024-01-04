-- 아래 쿼리는 MEMBER, MEMBER_EMAIL 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC MEMBER;
DESC MEMBER_EMAIL;

-- MEMBER테이블과 MEMBER_EMAIL테이블에 대해 LEFT OUTER JOIN을 사용하여
-- member_name과 email을 결합하여 출력하세요.
select member_name, email
from MEMBER a left outer join MEMBER_EMAIL b
on a.member_id = b.member_id
order by member_name asc;
