DESC score;

-- 짜장면을 받을 수 있는 학생을 조회하는 쿼리를 작성해주세요.
select *
from score
where 
korean = 100 || english = 100 || math = 100;


-- 과자를 받을 수 있는 학생을 조회하는 쿼리를 작성해주세요.
select *
from score
where
(75 <= korean && korean <= 95) &&
(75 <= english && english <= 95) &&
(75 <= math && math <= 95) ;

select *
from score
where
korean between 70 and 95 &&
english between 70 and 95 &&
math between 70 and 95;