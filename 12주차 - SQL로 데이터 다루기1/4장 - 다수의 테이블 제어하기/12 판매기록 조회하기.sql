-- 판매기록을 product 테이블과 연결해 출력해 봅시다.
-- 이때 product테이블이 중심이 되도록 해 봅시다.

select *
from sale 
right join product
on product.id = sale.product_id;