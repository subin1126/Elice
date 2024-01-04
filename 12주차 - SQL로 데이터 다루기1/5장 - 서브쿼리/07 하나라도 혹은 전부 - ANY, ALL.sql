-- salaries 테이블에서 from_date가 2000-12-31 이전인 사람들의 급여 중 하나의 급여 보다 더 적은 급여를 받은 직원의 급여 정보를 모두 출력해보세요.

-- < any = max 랑 같은 의미가 됨
select *
from salaries
where salary < any (select salary from salaries where from_date < '2000-12-31');

-- salaries 테이블에서 from_date가 2000-12-31 이전인 사람들의 급여 중 모든 급여보다 적은 급여를 받은 직원의 급여 정보를 모두 출력해보세요.

-- < all = min 값
-- 전부보다 작은 값 and 이잖음 모두보다 작다 = 최소값
select *
from salaries
where salary < all (select salary from salaries where from_date < '2000-12-31');

