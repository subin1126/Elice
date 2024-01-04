// "Make a(n) '메뉴 이름'" 문자열을 반환하는 함수를 export하세요.
// 메뉴 이름이 a, e, i, o, u로 시작하면 "Make an '메뉴이름'", 그렇지 않으면 "Make a '메뉴이름'"을 반환합니다.
function ahdma(word){
    var vowles = "aeiou";
    return vowles.indexOf(word[0]) !== -1;
}

function dd(menu){
    var article = ahdma(menu) ? "an" : "a";
    return `Make ${article} ${menu}`;
}

exports.dd = dd;