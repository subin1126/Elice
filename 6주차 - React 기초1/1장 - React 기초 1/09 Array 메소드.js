// 지시사항을 참고하여 코드를 작성하세요.
var a = [-1, -2, -3, -4, -5];
a.forEach((item) => {
    console.log(item);
})

// 지시사항을 참고하여 코드를 작성하세요.
var b = [-1, -2, -3, -4, -5];
var newB = b.map(item => Math.abs(item));

console.log(newB);


// 지시사항을 참고하여 코드를 작성하세요.
var c = [-1, -2, -3, -4, -5];
var newC = c.filter(item => -1 > item && item > -5);

console.log(newC);
