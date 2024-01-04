-- 아래 쿼리는 REQUEST_HIST, MEMBER 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC REQUEST_HIST;
DESC MEMBER;

-- REQUEST_HIST 테이블과 MEMBER 테이블을 INNER JOIN하여 조회하되, 요청상태(req_status)가 fail인 정보만 조회하는 쿼리를 작성하세요.
select request_id, req_status, member_name
from REQUEST_HIST a INNER JOIN MEMBER b
on a.req_member_id = b.member_id
where req_status = 'fail'
order by request_id asc;