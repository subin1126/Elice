-- rental테이블의 구조를 조회합니다. 수정하실 필요는 없습니다.
DESC rental;

select * from rental;

-- 누가 몇권의 책을 빌려갔는지 조회해 봅시다.

--user_id를 중심으로 그룹바이할거
--각각 몇권 빌릴지 확인 count
--user_id별로 어떻게 되어있는지 확인하고 싶음 group by user_id;
select user_id, count(*) from rental group by user_id;
