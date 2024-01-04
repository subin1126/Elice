// 지시사항에 따라 코드를 작성합니다.
function makeTotalPrice(object1) {
    var num1 = object1.quantity1;
    var num2 = object1.price1;
    var num3 = object1.quantity2;
    var num4 = object1.price2;

    return num1*num2 + num3*num4;
}







// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = {
  quantity1: 4,
  price1: 500,
  quantity2: 2,
  price2: 300
};

console.log(makeTotalPrice(inputA));

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: makeTotalPrice }
