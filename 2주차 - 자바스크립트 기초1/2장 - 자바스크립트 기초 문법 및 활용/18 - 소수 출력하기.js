// 매개변수 n이 소수라면 true를, 소수가 아니라면 false를 반환하는 isPrime() 함수를 정의하세요.
function isPrime(n){
    var divisor = 2;

    if(divisor == 1){
        return false;
    }

    while(n>divisor){
        if(n%divisor == 0 ){
            return false;
        }
        else {
            divisor++;
        }
    }
    return true;
}



// 아래 부분은 채점을 위해 작성되었습니다. 수정하지 마세요.
for (var i = 11; i <= 20; i++) {
  document.writeln(i, isPrime(i));
}
