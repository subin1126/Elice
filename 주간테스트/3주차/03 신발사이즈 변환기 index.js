//1. 지시사항에 따라 함수 코드를 완성하세요.
function calculate(e) {
    e.preventDefault();
  
    var mm = parseFloat(document.getElementById('mm').value);
  
    var inches = mm / 25.4;
  
    var us_size = 3 * inches - 22;
    var uk_size = 3 * inches - 23;
    var eu_size = 1.27 * (uk_size + 23) + 2;
  
    var us_size1 = us_size.toFixed(2);
    var uk_size1 = uk_size.toFixed(2);
    var eu_size1 = eu_size.toFixed(2);
  
    document.getElementById('us_size').value = us_size1;
    document.getElementById('uk_size').value = uk_size1;
    document.getElementById('eu_size').value = eu_size1;
  }
  
  // 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
  const button = document.getElementById('calc');
  button.addEventListener('click', calculate);
  