// 4) Click Image Slider
document.querySelector('.right-arrow').onclick = function () {
    //오른쪽 버튼 element가져옴
    //오른쪽 버튼 클릭했을 때 이벤트를 바꿔주는 작업
    var currentSlide = document.querySelector('#photo .slide.active');
    //현재 슬라이드 가져오는 작업, 가장 먼저,   현재 활성화 된 슬라이드
    var nextSlide = currentSlide.nextElementSibling;
    //다음 슬라이드, 다음 형제 가져옴
    if (nextSlide === null) {
      //다음 형제 없는 경우, 마지막 슬라이드일 경우
      nextSlide = currentSlide.parentElement.firstElementChild;
      //막내 다음을 다시 첫번째 슬라이드로 가게끔 부모의 첫째 자식으로 가게끔
    }
    currentSlide.animate(
      {
        opacity: [1, 0], //투명도를 의미함
      },
      {
        duration: 500, //실행시간
        easing: 'ease',
        iterations: 1, //반복 1번
        fill: 'both',
        //애니메이션 끝난 다음 어디 위치할지 설정
        //both => 애니메이션 [forward 1 실행하면 0(끝부분)으로 남아있고, backward 0 실행하면 1(첫번쨰)로 남아있음]
      }
    );
    currentSlide.classList.remove('active'); //현재위치를 투명도 변경해주고 active 삭제해줘서 화면에서 사라지게
    nextSlide.animate(
      //현재가 사라지면 다음 슬라이드 보여주기
      {
        opacity: [0, 1], //다음슬라이드의 투명도 0->1 얼마나 보여질지 의미하는거래
      },
      {
        duration: 500,
        easing: 'ease',
        iterations: 1,
        fill: 'both',
      }
    );
    nextSlide.classList.add('active'); //active 덮어서 다시 생성
  };
  
  //왼쪽 이미지 슬라이드 기능 구현
  document.querySelector('.left-arrow').onclick = function () {
    var currentSlide = document.querySelector('#photo .slide.active');
    var previousSlide = currentSlide.previousElementSibling; //첫째 앞은 없으니까 마지막과 연결시키기
    if (previousSlide === null) {
      previousSlide = currentSlide.parentElement.lastElementChild;
    }
    currentSlide.animate(
      {
        opacity: [1, 0],
      },
      {
        duration: 500,
        easing: 'ease',
        iterations: 1,
        fill: 'both', //애니메이션 끝나고도 그 자리에 남아있어야해서
      }
    );
    currentSlide.classList.remove('active'); //애니메이션 끝나면 안보이게 제거
    previousSlide.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 500,
        easing: 'ease',
        iterations: 1,
        fill: 'both',
      }
    );
    previousSlide.classList.add('active'); //이제 화면에 보이게
  };
  