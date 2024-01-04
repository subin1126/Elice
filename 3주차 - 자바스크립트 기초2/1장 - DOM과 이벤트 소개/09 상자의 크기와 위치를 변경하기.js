function move() {
    // 코드를 완성시켜 주세요.
    var box = document.getElementById('move');
    box.style.width = '600px';
    box.style.height = '600px';
    box.style.left = '300px';
  }
  
  var btn = document.getElementById('btn');
  
  btn.addEventListener('click', move);
  