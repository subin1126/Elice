-- 아래는 BUDGET_USE 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC BUDGET_USE;

-- 비용이 전체 비용 합계에서 차지하는 비율을 조회해 봅시다.

select id, use_code, expense,
ROUND((expense / sum(expense) over()) * 100, 4) AS RATIO
from BUDGET_USE
ORDER BY ID ASC; 