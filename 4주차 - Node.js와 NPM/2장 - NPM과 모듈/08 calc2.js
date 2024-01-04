//calc2.js는 새로운 객체에 프로퍼티를 설정 후 module.exports라는 하나의 값에 할당합니다.
var calc = require("./calc");
//1. calc 라는 객체를 생성하세요.

//2. calc객체에 사칙연산에 해당하는 프로퍼티를 모두 추가하세요.
calc.add = function(a,b){
    return a+b;
}

calc.minus = function(a,b){
    return a-b;
}

calc.multiply = function(a,b){
    return a*b;
}

calc.divide = function(a,b){
    return a/b;
}

//3. module.exports 에 calc 객체를 할당하세요.
module.exports = calc;