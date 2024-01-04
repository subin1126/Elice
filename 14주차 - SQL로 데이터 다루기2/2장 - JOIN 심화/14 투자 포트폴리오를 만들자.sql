-- ELICE_WALLET테이블과 EXCHANGE테이블을 결합하여 코인이름, 코인구입가격, 코인현재가격을 출력해주세요.

select coin_name, coin_buy_price, coin_now_price
from ELICE_WALLET a join EXCHANGE b
on a.coin_ticker = b.coin_ticker
order by coin_name asc;