// 지시사항에 따라 코드를 작성합니다.
function getOnlyChilds(array1){
    var arr = [];

    for(var i = 0; i<=array1.length-1; i++){
        if(array1[i].age<20){
            arr.push(array1[i].name);
        }
    }return arr;
}







// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [{
  name: "박태환",
  age: 35
}, 
{
  name: "유재석",
  age: 49
},
{
  name: "김강훈",
  age: 12
},
{
  name: "이지원",
  age: 15
}]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getOnlyChilds }
