// 3) Tabs

var links = document.querySelectorAll('.tabs-list li a'); //탭버튼
var items = document.querySelectorAll('.tabs-list li'); //탭버튼 아래에 있는 리스트
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    e.preventDefault(); //이동아니라 탭눌렀을때 보였다안보였다 하는거라 이동하는 기본기능 정지
  };
}

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    //각 탭에 클릭 발생했을 때 어떻게 움직일지
    var tabId = this.querySelector('a').getAttribute('href');
    //a태그에있는 탭 id를 가지고 오게됨
    console.log(this.classList);
    document
      .querySelectorAll('.tabs-list li, .tabs div.tab')
      .forEach(function (item) {
        item.classList.remove('active');
        console.log(item);
      });
    document.querySelector(tabId).classList.add('active');
    //active 클래스 추가 => index.css에서 이게뭔지 확인
    //display를 block으로 만들고 !important로 앞선 속성을 지워주고있다
    //display: none;으로 화면에 안보이게 할 수 있는데
    //그걸 다시 block으로 덮어써주는 과정을 active 클래스가 해주고있다
    this.classList.add('active');
    //기존 active를 제거하고 우리가 지정한 탭 아이디로 선택한 클래스에서는 active를 추가해주고있다
  };
}
