const object = {
    x: {
        a: 1,
        b: 2,
        c: 3
    },
    y: {
        a: 4,
        b: 5,
        c: 6
    }
}

// 위에 선언된 `object` 객체의 `x`의 `b` 값을 출력해보세요. (Optional chaining 연산을 사용하세요.)
console.log(object.x.b);
// 위에 선언된 `object` 객체의 `z`의 `a` 값을 출력해보세요. (Optional chaining 연산을 사용하세요.)
console.log(object.z?.a);

// const a = [{x:1, y:2}, {x:3, y:4}];

// console.log(a?.[1]?.x);
// console.log(a[0].y);
// console.log(a[0].z);