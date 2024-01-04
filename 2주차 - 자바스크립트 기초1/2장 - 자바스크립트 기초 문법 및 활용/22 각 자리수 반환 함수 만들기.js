// 지시사항에 따라 코드를 작성합니다.
function getDigits(num1) {
    var str = num1.toString();
    var arr = [];
  
    for (var i = 0; i <= str.length - 1; i++) {
      arr.push(parseInt(str.charAt(i)));
    }
  
    return arr;
  }
  
  /* for(let s of inputAString){
      digits.push(parseInt(s)) 으악
  } */
  
  // 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
  // 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
  var inputA = 12321;
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = { inputs: [inputA], func: getDigits };
  