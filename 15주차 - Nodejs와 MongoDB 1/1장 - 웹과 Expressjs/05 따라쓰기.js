// express로 app 객체를 생성하세요.
const express = require('express');

const app = express();

const port = 8080;

// response의 헤더 정보와 상태 코드를 설정하고, request의 params를 json 형태로 보내세요.
app.get('/', (req, res) => {
    res.send('root pages');
});

app.get('/:follow', (req, res) => {
    res
    .set({
        "Content-Type": "text/json",
        ETag: "10000",
    })
    .status(201)
    .json(req.params)
});


// 8080번 포트로 서버를 여세요.
app.listen(port);

/*
1. : 로 시작하는 경로 세그먼트는 Express.js에서 동적 매개변수를 나타낸다.
이런 식의 경로를 설정하면 해당 부분에 입력된 값은 동적으로 추출되고 'req.params' 객체에 저장된다 
:follow 부분에 어떤 값을 입력하느냐에 따라
req.params.follow에 그 값이 할당된다

동적 매개변수를 사용하면 경로의 일부를 변수로 활용하여 동일한 라우트 핸들러를 사용하여 다양한 요청을 처리할 수 있다

2. res.json(req.params)가 res.send처럼 응답을 전송해줌
대신 화면에는 json 형식의 데이터가 표시되며,
req.params 객체의 내용이 json 형태로 클라이언트에게 반환된다

그냥 res.send()를 썼다면
res.send(`문자열 ${req.params.follow}`);
이런식으로 문자열 또는 html을 클라이언트에게 보낼 수 있다

클라이언트에게 received parameter:[동적 매개변수 값] 과 같은 문자열이 반환된다 context-type을 text/plain으로 설정하므로 클라이언트는 텍스트로 응답 받게 됨

3. HTTP 헤더
헤더는 HTTP 요청 및 응답 메시지의 일부로, 데이터의 메타 정보를 포함하는 부분이며,
클라이언트와 서버 간에 데이터를 교환하고 통신할 때 추가 정보를 제공하는데 사용됨

헤더의 주요 역할 중 일부
- 콘텐츠 유형(Content-Type)
  text/html은 html 페이지를, application/json은 json 데이터를 나타낸다
  클라이언트는 이 정보를 사용하여 수신한 데이터를 올바르게 해석하고 표시할 수 있도록 도와줌
  
- 상태 코드(Status Code)
  HTTP 응답에는 상태 코드가 포함되며, 이 코드는 요청의 성공, 실패 또는 다른 상태를 나타냄
  200 - 성공, 404 - 찾을 수 없음, 500 - 서버 오류
  
- ETag 및 캐싱
  헤더는 리소스의 버전을 식별하기 위한 고유한 토큰을 제공한다
  클라이언트는 이 토큰을 사용하여 리소스를 캐싱하고, 이후 요청에서 리소스가 변경되었는지를 확인하는 데 사용한다
  이를 통해 서버와 클라이언트 간의 효율적인 캐싱 및 데이터 전송 관리가 가능하다
  캐싱과 버전관리를 위한 헤더는 네트워크 트래픽을 줄이고 성능을 향상시킴
  
헤더는 클라이언트와 서버 간의 통신을 보다 효율적이고 안정적으로 만드는 데 중요한 역할을 한다*/
