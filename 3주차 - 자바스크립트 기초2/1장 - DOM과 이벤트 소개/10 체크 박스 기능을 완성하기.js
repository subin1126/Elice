// select 클래스를 가지고 있는 3개의 요소를 가져옵니다.
var select1 = document.getElementById('one');
var select2 = document.getElementById('two');
var select3 = document.getElementById('three');

function handleOnclick() {
  this.classList.toggle('on'); // 선택된 요소에 on 클래스를 추가
}

// 가져온 3개의 요소에 이벤트를 등록합니다.

select1.addEventListener('click', handleOnclick);
select2.addEventListener('click', handleOnclick);
select3.addEventListener('click', handleOnclick);
