//calc.js는 exports에 직접 프로퍼티를 할당합니다.
//사칙연산에 해당하는 함수 4개를 작성해서 exports에 할당하세요.
exports.add = function(a,b){
    return a+b;
};

exports.minus = function(a,b){
    return a-b;
};

exports.multiply = function(a,b){
    return a*b;
};
exports.divide = function(a,b){
    return a/b;
};