-- 아래는 STORE, PAYMENT 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC STORE;
DESC PAYMENT;

-- EXISTS문을 응용하여, 결제금액이 5000원 이상인 가게ID, 가게이름을 조회하는 쿼리를 작성해보세요.
select store_id, store_name
from STORE
where exists (
    select store_id
    from PAYMENT
    where pay_amount >= 5000
)
order by store_id asc;

select store_id, store_name
from STORE s
where exists (
    select '0'
    from PAYMENT p
    where p.pay_amount >= 5000 and p.store_id = s.store_id
)
order by store_id asc;
