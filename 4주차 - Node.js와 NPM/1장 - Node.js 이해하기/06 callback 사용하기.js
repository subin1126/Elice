const countDown = require('./countdown');

countDown(5, () => {
  console.log('BOOM!');
});

//여기서 화살표 함수가 콜백함수가 되는 것!
