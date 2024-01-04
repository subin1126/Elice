-- 대출 반납의 정보가 담긴 테이블의 구조를 조회합니다. 수정하실 필요는 없습니다.
DESC rental;

-- 반납 시간을 수정하는 쿼리를 작성해 보세요.
update rental
set rental_end_date = '2019-04-05 12:00:30'
where id = '1000';

-- 대출 반납 상태를 조회합니다. 반납시간이 올바르게 추가되었는지는 실행버튼을 통해 확인할 수 있습니다.
SELECT * FROM rental;