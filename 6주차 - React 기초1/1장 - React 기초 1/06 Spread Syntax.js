// `[100, 200, 300]`을 값으로 갖는 배열 `a`를 선언하세요.
const a = [100, 200, 300];
// `[400, 500, 600]`을 값으로 갖는 배열 `b`를 선언하세요.
const b = [400, 500, 600];
// Spread syntax(전개 구문)를 이용하여 `a`와 `b`를 합친 `c` 배열을 만들어보세요.
const c = [...a, ...b];
//배열이나 객체를 복제할 수 도 있음
// `console.log`를 이용해 `c` 배열을 출력하세요.
console.log(c);

// function intro(name, age, ...rest){
//     console.log("이름: "+name);
//     console.log("나이:" + age);
//     console.log("추가정보: "+rest);
// }

// intro("엘리스", 23, "디아블로", "발로란트", "p의거짓", 123, 0.7, -45);
