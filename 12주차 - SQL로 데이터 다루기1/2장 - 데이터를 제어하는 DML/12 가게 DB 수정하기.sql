-- 아래에 문제 설명대로 수정해 봅시다.
UPDATE product
set stock = 0
WHERE name = 'carrot';

update product
set selling_price = 800
where name = 'tea';

update product
set stock = 50
where name = 'clock';

delete
from product
where name = 'trump card';

-- 수정된 product테이블 전체를 조회합니다. 만약 product를 수정하지 않았다면 수정되지 않은 값이 조회됩니다.
select * from product;