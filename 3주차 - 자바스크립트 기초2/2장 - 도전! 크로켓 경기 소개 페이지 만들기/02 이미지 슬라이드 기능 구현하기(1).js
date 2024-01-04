// 2) Image Slider

var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;
//현재 화면에 보여지고 있는 슬라이드가 몇번 슬라이드인지 저장해두는 곳

setInterval(function () {
  var from = -(1024 * currentSlide); //현재지점에서 -1024한게 from
  var to = from - 1024; // 이동할지점, 계속 왼쪽으로 이동할거라 -함
  //from to 각각 이미지가 현재 있는 위치에서 어디로 이동할건지 저장하고있는 변수
  slides.animate(
    {
      marginLeft: [from + 'px', to + 'px'], //from => to로 이동
    },
    {
      duration: 500, //실행 시간
      easing: 'ease', //애니메이션이 어떻게 실행될지
      iterations: 1, //계속 반복하라
      fill: 'both',
    }
  );
  currentSlide++; //애니메이션이 끝나면, 현재 화면에 보이는 슬라이드 번호 증가해야지
  if (currentSlide === slide.length - 1) {
    //마지막슬라이드 위치에 오면
    currentSlide = 0; //첫번째 0번슬라이드로 돌아가게 함
  }
}, 3000); //이게 다 3000ms 간격으로 실행됨~
