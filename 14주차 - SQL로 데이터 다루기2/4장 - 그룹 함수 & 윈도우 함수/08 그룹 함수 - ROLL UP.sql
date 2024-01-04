-- 아래는 BOOK_HISTORY 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC BOOK_HISTORY;

-- 책 종류와 책 카테고리로 그룹화 하고 ROLLUP을 이용하여 각 그룹당 판매 개수 합을 구해보세요.

SELECT KIND, CATEGORY, SUM(SELL_COUNT)
FROM BOOK_HISTORY
GROUP BY KIND, CATEGORY WITH ROLLUP;
