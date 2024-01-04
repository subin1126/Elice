const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var s;

rl.on('line', function (line) {
  // 입력을 받는 부분입니다. 수정하지 마세요!
  s = line.split('');

  rl.close();
}).on('close', function () {
  var o1 = s[0]; // 연산자 1
  var o2 = s[s.length - 1]; // 연산자 2
  s.pop();
  s.shift();
  s = s.join('');

  var num = parseInt(s); // 연산자가 아닌 숫자 부분

  // 조건에 맞추어 코딩해주시면 됩니다.
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('');
  } else if (num % 5 === 0) {
    console.log(o1.repeat(num));
  } else if (num % 3 === 0) {
    console.log(o2.repeat(num));
  } else {
    console.log(o1.repeat(num) + o2.repeat(num));
  }
});
