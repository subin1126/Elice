-- 아래는 STUDENT 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC STUDENT;

-- 키와 이름에 대해 오름차순으로 학생들을 정렬시켜 봅시다.
SELECT 
    ROW_NUMBER() OVER (ORDER BY HEIGHT ASC, NAME ASC) AS ROW_NUMBER,
    NAME,
    HEIGHT
FROM STUDENT
ORDER BY ROW_NUMBER;

