-- 아래에 미션을 수행하는 코드를 작성해 봅시다.

select *
from shareholder;

select *
from shareholder
where stock >= 100000;

select stock
from shareholder
where name = 'Alexis' || name = 'Craig' || name = 'Fred';

select name, stock
from shareholder
where agree = 1 &&  stock >= 100000;

select name, stock
from shareholder
where agree = 0 && stock >= 100000;

select *
from shareholder
where stock >= 200000 || 100000 >= stock;