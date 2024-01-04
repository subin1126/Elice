-- 지시사항을 만족하는 쿼리를 작성해보세요.

select name, sum(amount)
from sale
group by name
having sum(revenue) >= 50000;