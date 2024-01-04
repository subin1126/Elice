// 숫자 0부터 5까지의 정수를 갖는 배열을 선언하고, `forEach` 메서드를 이용해 숫자를 하나씩 출력하는 코드를 작성해보세요.

//! Past
/*
var a = [0, 1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  var item = a[i];
  console.log(item);
}
*/

var a = [0,1,2,3,4,5];
a.forEach((item) => {
    console.log(item);
})