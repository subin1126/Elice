// 지시사항에 따라 코드를 작성합니다.
function verifyEmail(str1) {
    var i = 0;
    if (str1.includes("@") == true) {
        i++;
      if (str1.includes(".") == true) {
          i++;
        if (str1.length >= 5) {
            i++;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }}
  
  
  // 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
  // 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
  var inputA ="abc@com";
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = { inputs: [inputA], func: verifyEmail };
  