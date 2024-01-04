//제시된 데이터
var data = {
    items: [
      {
        name: 'user1',
        group: 1,
      },
      {
        name: 'user2',
        group: 1,
      },
      {
        name: 'user3',
        group: 2,
      },
    ],
  };
  
  //위에 제시된 데이터 배열을 지시사항에 따라 div 목록으로 렌더링합니다.
  var buttons = document.getElementsByClassName('btn');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener(
      'click',
      (function (index) {
        return function () {
          alert(
            `Hi, ${data.items[index].name}! You are in group ${data.items[index].group}`
          );
        };
      })(i)
    );
  }
  