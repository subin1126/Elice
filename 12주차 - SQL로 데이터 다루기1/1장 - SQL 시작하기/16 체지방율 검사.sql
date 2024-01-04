-- 아래에 미션을 수행하는 코드를 작성해 봅시다.
select *, (weight / ((height*0.01) * (height*0.01)))
from student;



select *, (weight / ((height*0.01) * (height*0.01))) 
from student
where 18.5 > (weight / ((height*0.01) * (height*0.01))) || 25.0 < (weight / ((height*0.01) * (height*0.01)));
