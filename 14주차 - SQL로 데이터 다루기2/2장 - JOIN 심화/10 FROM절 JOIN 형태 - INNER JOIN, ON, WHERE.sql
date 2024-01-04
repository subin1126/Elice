-- 아래 쿼리는 APPLICATION, APPLICATION_DTL 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC APPLICATION;
DESC APPLICATION_DTL;

-- APPLICATION 테이블과 APPLICATION_DTL 테이블에 대해 app_id를 기준으로 INNER JOIN을 실시하되
-- app_device가 iphone 또는 all인 데이터에 대해서 조회하는 쿼리를 작성하세요.

select a.app_id, app_name, app_content
from APPLICATION a INNER JOIN APPLICATION_DTL b
on a.app_id = b.app_id
where app_device = 'iphone' or app_device = 'all'
order by app_id asc;