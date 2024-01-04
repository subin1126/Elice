-- DESC 명령어를 통해 정의된 kickboards 테이블을 확인할 수 있습니다.
DESC kickboards;

-- kickboards 테이블에 member_birthday 컬럼을 추가하세요.
alter table kickboards add column member_birthday date null;

-- rental_date 속성의 데이터 타입을 TIME으로 수정하세요
alter table kickboards modify column rental_date time NULL;

-- member_id와 kickboard_id 컬럼의 제약 조건을 NOT NULL로 수정하세요.
alter table kickboards modify column member_id VARCHAR(16) not null;
-- alter table kickboards modify column kickboard_id VARCHAR(16) not null;


-- kickboard_id와 kickboard_brand 컬럼의 이름을 변경하세요.
alter table kickboards change column kickboard_id id VARCHAR(16) not NULL;
alter table kickboards change column kickboard_brand brand VARCHAR(16) NULL;

-- distance 컬럼을 삭제하세요.
alter table kickboards drop column distance;

-- kickboards 테이블의 이름을 kickboard로 수정하세요.
alter table kickboards rename kickboard;

-- 수정된 kickboard 테이블의 구조를 확인해봅니다. 제출 시 아래 주석을 해제하세요.
DESC kickboard;