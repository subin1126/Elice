-- 아래는 LECTURE, LECTURE_TYPE 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC LECTURE;
DESC LECTURE_TYPE;

-- 타입ID, 타입이름, 타입에 해당하는 강의의 수를 조회하는 쿼리를 작성해봅시다.
select type_id, type_name, (
    select count(*)
    from LECTURE l
    where l.lecture_type_id = t.type_id
) as lecture_number
from LECTURE_TYPE t
order by type_id asc;