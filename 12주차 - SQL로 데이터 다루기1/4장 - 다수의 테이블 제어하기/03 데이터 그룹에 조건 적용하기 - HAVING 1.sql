-- rental테이블의 구조를 조회합니다. 수정하실 필요는 없습니다.
DESC rental;


-- 누가 몇권의 책을 빌려갔는지 조회해 봅시다.
-- 이때 두권 이상 빌린 사람들만 조회해 봅시다.


select user_id, count(*)
from rental
group by user_id
having count(user_id) >= 2;
;