/* 지시사항 1번을 참고하여 코드를 작성하세요. */

var target = document.getElementById('btn');

target.addEventListener('click', function () {
  var block = document.getElementById('game');
  if (block) {
    block.style.display = 'none';
  }
});
