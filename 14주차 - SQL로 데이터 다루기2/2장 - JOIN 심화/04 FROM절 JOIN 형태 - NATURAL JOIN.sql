-- 아래 쿼리는 LOGIN_HISTORY, MEMBER 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC LOGIN_HISTORY;
DESC MEMBER;

-- LOGIN_HISTORY테이블과 MEMBER테이블에 대해 NATURAL JOIN을 이용하여 조회하고자 하는 컬럼을 출력해보세요.

select login_history_id, member_name, member_email, login_date
from LOGIN_HISTORY NATURAL JOIN MEMBER
ORDER BY login_history_id ASC;