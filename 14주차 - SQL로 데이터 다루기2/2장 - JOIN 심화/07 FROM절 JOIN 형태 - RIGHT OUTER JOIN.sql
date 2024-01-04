-- 아래 쿼리는 RESPONSE_DTL, REQUEST 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC RESPONSE_DTL;
DESC REQUEST;

-- RESPONSE_DTL테이블을 기준으로 REQUEST테이블과 RIGHT OUTER JOIN을 실시하는 쿼리를 작성해보세요.

select request_id, request_member_id, response_content
from RESPONSE_DTL a right outer join REQUEST b
on a.response_id = b.response_id
order by request_id asc;