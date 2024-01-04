// `x`는 `3`, `y`는 `6` 값을 갖는 객체를 선언하세요.
// Destructuring Assignment 표현을 이용하여 위에서 선언한 객체로부터 각각 `x`, `y` 변수를 선언하세요.
// `console.log`를 이용해 `x`와 `y`의 합을 출력해보세요.

const object = { x: 3, y: 6 };

const { x, y } = object;

console.log(x + y);

// 숫자 `5`과 `2`를 요소로 갖는 배열을 선언하세요.
// Destructuring Assignment 표현을 이용하여 위에서 선언한 배열로부터 각각 `a`, `b` 변수를 선언하세요.
// `console.log`를 이용해 `a`와 `b`의 차를 출력해보세요.

const array = [5, 2];

const [a, b] = array;

console.log(a - b);
