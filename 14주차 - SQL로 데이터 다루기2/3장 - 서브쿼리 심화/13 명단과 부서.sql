-- 아래는 EMPLOYEE, DEPARTMENT 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC EMPLOYEE;
DESC DEPARTMENT;

-- EMPLOYEE_DEPARTMENT 뷰를 만들고, 뷰의 모든 데이터를 조회하세요.
CREATE VIEW EMPLOYEE_DEPARTMENT AS
(
    SELECT E.*, D.department_name
    FROM EMPLOYEE E
    INNER JOIN DEPARTMENT D 
    ON E.department_id = D.department_id

);

select * from EMPLOYEE_DEPARTMENT;