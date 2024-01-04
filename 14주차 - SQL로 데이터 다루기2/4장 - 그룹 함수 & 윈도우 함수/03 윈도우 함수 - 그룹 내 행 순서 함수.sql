-- 아래는 PARTICIPANT 테이블에 대한 구조를 보여줍니다. 테이블을 수정하실 필요는 없습니다.
DESC PARTICIPANT;

-- 그룹 별, 참가자의 앞, 뒤 기록과 그룹 내에서 가장 빠른 기록, 가장 느린 기록을 조회하세요.
select id, group_num, time_record,
lag(time_record, 1) -- 바로 앞 사람 1
over(partition by group_num order by time_record asc) as LAG,

lead(time_record, 1)
over(partition by group_num order by time_record asc) as LEAD,

first_value(time_record)
over(partition by group_num order by time_record asc
rows
between unbounded preceding and unbounded following) as FIRST_VALUE,

last_value(time_record)
over(partition by group_num order by time_record asc
rows
between unbounded preceding and unbounded following) as LAST_VALUE

from PARTICIPANT
order by group_num asc, time_record asc;
