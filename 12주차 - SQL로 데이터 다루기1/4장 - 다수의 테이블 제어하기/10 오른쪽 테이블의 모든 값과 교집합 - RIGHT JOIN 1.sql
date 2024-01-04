-- 대출,반납에 대한 정보를 user 테이블과 연결해 조회해 봅시다.
-- 대신 user테이블이 중심이 되도록 해 봅시다.

select *
from rental
right join user
on rental.user_id = user.id;

-- select *
-- from user
-- left join rental
-- on user.id = rental.user_id;

-- select *
-- from user
-- right join rental
-- on user.id = rental.user_id;

-- select *
-- from rental
-- left join user
-- on rental.user_id = user.id;

