function adder(a, b, call) {
    if (a == 0 || b == 0) {
        call("no zero", null);
        return;
    }
    console.log(`${a}+${b}=${a + b}`);
    
    call(null, a + b);
}

function handle_error(error) {
    console.log("ERROR: ", error);
}

function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        adder(a, b, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function add_all(a, b, c) {
    adder_promise(a, b)
        .then((result) => adder_promise(result, c))
        .then(result2 => {
            console.log(`${a}+${b}+${c}=${result2}`);
        })
        .catch(handle_error);
}

module.exports = add_all;