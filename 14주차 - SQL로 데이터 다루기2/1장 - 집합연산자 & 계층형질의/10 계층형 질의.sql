-- 아래 쿼리는 MEMBER 테이블의 구조를 나타냅니다. 해당 테이블을 수정할 필요는 없습니다.
DESC MEMBER;

SELECT * FROM MEMBER;

-- 계층형 질의, WITH RECURSIVE 를 이용하여, member_id, manager_id, lvl을 출력하되
-- member_id 오름차순, lvl 오름차순 정렬을 적용하여 쿼리를 작성하세요.
-- WITH RECURSIVE CTE(member_id, manager_id, lvl)
-- AS(
--     SELECT member_id, manager_id, 0 as lvl
--     FROM MEMBER
--     WHERE manager_id IS null
    
--     UNION ALL

--     SELECT a.member_id, a.manager_id, b.lvl+1
--     FROM MEMBER AS a
--     JOIN CTE AS b
--     ON a.manager_id = b.member_id
-- )

-- SELECT member_id, manager_id, lvl
-- FROM CTE
-- ORDER BY member_id ASC, lvl ASC;


WITH RECURSIVE cte(member_id, manager_id, lvl)
as(
    select member_id, manager_id, 0 as lvl
    from MEMBER
    where manager_id is null

    UNION ALL
    
    select a.member_id, a.manager_id, b.lvl + 1
    from MEMBER as a 
    join cte as b 
    on a.manager_id = b.member_id
)

select member_id, manager_id, lvl
from cte
order by member_id asc, lvl asc;