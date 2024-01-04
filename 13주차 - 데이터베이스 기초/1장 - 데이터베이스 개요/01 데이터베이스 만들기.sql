-- kickboard 테이블을 정의하세요.
CREATE TABLE kickboard(
    member_id VARCHAR(16),
    member_name VARCHAR(16),
    kickboard_id VARCHAR(16),
    kickboard_brand VARCHAR(16),
    rental_location VARCHAR(32),
    rental_date DATETIME,
    distance INT(11),
    price INT(11)
);

-- 데이터베이스에 정의된 테이블 목록을 출력하세요.
SHOW TABLES;

-- kickboard 테이블의 구조를 출력하세요.
DESC kickboard;

--이거 실행하면 결과에 tabels in library라고 나오는데
--library라는 데이터베이스 안에 테이블 kickboard 라는 뜻이래
