// 지시사항에 따라 코드를 작성합니다.
function addStringLength(str1, str2) {
    /* a = str1.length;
     b = str2.length;

    return a+b;
*/

return str1.length + str2.length;


  
};



// abc, de 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = "Hello";
var inputB = "World";

console.log(addStringLength(inputA, inputB));

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA, inputB], func: addStringLength }
