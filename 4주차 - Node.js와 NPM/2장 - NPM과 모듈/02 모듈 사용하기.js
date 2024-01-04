//index.js

const module1 = require('./module1'); //"./modul1.js" => .js생략가능
const module2 = require('./module2'); //'./module2/index.js'인데 디렉터리를 require하면 자동으로 index.js를 require하기 때문에 생략가능
const data = require('./data'); //.json 생략할수있음
const funcModule = require('./funcModule');

console.log(
  module1,
  module2,
  data.name,
  /* funcModule 사용 */
  funcModule() //얘는 함수형이라 함수형으로 실행
);
