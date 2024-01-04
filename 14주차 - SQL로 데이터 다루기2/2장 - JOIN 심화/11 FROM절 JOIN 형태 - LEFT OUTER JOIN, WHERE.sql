-- 아래 쿼리는 AIR_ROUTE, AIRPLANE 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC AIR_ROUTE;
DESC AIRPLANE;

-- AIR_ROUTE테이블과 AIRPLANE테이블에 대해 route_id가 동일하고 경로가 Korea로 시작하는 데이터를 조회하는 쿼리를 작성하세요.

select route_from, route_to, airplane_id
from AIR_ROUTE a LEFT OUTER JOIN AIRPLANE b
on a.route_id = b.route_id
where route_from = 'Korea'
order by airplane_id asc;