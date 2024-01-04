-- 아래 쿼리는 FRONT_VERSION_HIST, BACK_VERSION_HIST 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC FRONT_VERSION_HIST;
DESC BACK_VERSION_HIST;

-- 1. FRONT_VERSION_HIST 테이블을 기준으로 BACK_VERSION_HIST 테이블과 버전ID로 LEFT OUTER JOIN을 해주세요.
select a.version_id, version_content_front, version_content_back
from FRONT_VERSION_HIST a LEFT OUTER JOIN BACK_VERSION_HIST b
ON a.version_id = b.version_id
order by version_id asc;

-- 2. FRONT_VERSION_HIST 테이블을 기준으로 BACK_VERSION_HIST 테이블과 버전ID로 RIGHT OUTER JOIN을 해주세요.
select b.version_id, version_content_front, version_content_back
from FRONT_VERSION_HIST a RIGHT OUTER JOIN BACK_VERSION_HIST b
ON a.version_id = b.version_id
order by version_id asc;

-- 3. 위에서 작성한 두 쿼리에서 ORDER BY를 제거 후, 중복을 제거하는 집합연산자로 결합하고 최종 결과에 대해 정렬을 해주세요.
select a.version_id, version_content_front, version_content_back
from FRONT_VERSION_HIST a LEFT OUTER JOIN BACK_VERSION_HIST b
ON a.version_id = b.version_id

UNION

select b.version_id, version_content_front, version_content_back
from FRONT_VERSION_HIST a RIGHT OUTER JOIN BACK_VERSION_HIST b
ON a.version_id = b.version_id

order by version_id asc;

