//1. 지시사항에 따라 함수 코드를 완성합니다.
function calculateVolume(e) {
    e.preventDefault();
  
    var height = document.getElementById('height').value;
    var radius = document.getElementById('radius').value;
  
    var answer = Math.PI * Math.pow(radius, 2) * height;
  
    var answer1 = answer.toFixed(2);
    var volume = document.getElementById('volume');
    volume.innerHTML = answer1;
  
    
    
  }
  
  // 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
  const button = document.getElementById('calc');
  button.addEventListener('click', calculateVolume);
  