const express = require("express");
const mongoose = require("mongoose");

// 책을 추가하고 검색하는 라우터를 불러와서 "/books" 경로에 등록하세요.
const bookRouter = require('./routes/books');

const app = express();

// mongoose를 이용해 MongoDB와 연결합니다.
mongoose.connect('mongodb://localhost:27017/myLibrary');

// body praser 미들웨어를 app에 추가합니다.
/*이 미들웨어는 HTTP 요청의 본문(body)을 파싱하고
  js객체로 변환해주는 역할을 한다
  json 형식과 URL-encoded 형식의 데이터를 처리할 수 있도록 설정한다
  
클라이언트가 json 형식의 데이터를 post 요청으로 보내는 경우,
body-parser를 사용하면 이 데이터를 express.js 라우트 핸들러에서
쉽게 접근하고 처리할 수 있다 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root page");
});

app.use('/books', bookRouter);

app.listen(8080);

/*body-parser는 다양한 형식의 데이터를 처리하여 어플리케이션에서 쉽게 사용할 수 있도록 도와준다

1. HTTP 요청 본문 파싱
 - 클라이언트에서 보낸 http 요청의 본문에 포함된 데이터를 파싱하여 js객체로 변환한다
 
2. 다양한 데이터 형식 지원
 - json, url-encoded, 멀티파트(form-data) 등 다양한 데이터 형식으르 처리할 수 있도록 지원
 
3. Express.js와 통합
 - 주로 express.js와 함께 사용되며, express.js 어플리케이션에서 app.use() 메서드를 통해 미들웨어로 등록할 수 있다 */