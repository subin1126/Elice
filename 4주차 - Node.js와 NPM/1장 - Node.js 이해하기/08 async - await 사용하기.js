const adder_promise = require('./promise');

function main_promise(a, b, c, d) {
    Promise.all([
        adder_promise(a, b),
        adder_promise(c, d), //동시에 2개돌림
    ])
    .then(([r1, r2]) => { //한번에 받음
        return adder_promise(r1, r2); //다시 전달
    })
    .then((r3) => {
        console.log(`${a}+${b}+${c}+${d}=${r3}`);
    });
}

/* 1. main 을 async 함수로 선언 */
async function main(a, b, c, d) {
    const [r1, r2] = await Promise.all([
        adder_promise(a, b),
        adder_promise(c, d),
    ]);
    const r3 = await adder_promise(r1, r2);
    console.log(`${a}+${b}+${c}+${d}=${r3}`);
}

main(1,2,3,4);