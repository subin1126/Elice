// 이전 실습에서는 Next.js 페이지를 기반으로 빌드해서 pages 내 각 파일에 포함된 html을 서버가 응답하도록 SSR을 구현했습니다.

// React에서의 Next.js를 사용하면 SSR, CSR을 혼합하여 적용할 수 있습니다.

// 이번 실습에는 Next가 제공하는 next/link나 next/router 를 사용해서 내부적으로 CSR을 동작해봅시다.



// index.js 에서 next/link를 불러오세요.

// import Link from 'next/link'
// Link 태그를 클릭할 때 CSR 방식으로 DOM을 변경해서 해당 경로로 가는 코드를 작성하세요.

// <Link href = {"/home"}>
// home으로 갑니다!
// </Link>



// 3. pages 내에 `about.js`이라는 파일을 생성해서 `home.js`과 마찬가지로 Link 태그를 클릭할 때 해당 경로로 가는 코드를 작성하세요.
//     - 이렇게 되면 CSR이 동작할 때 해당하는 js 파일이 실행되어 처음에 받은 `index.js` 파일 내의 html을 그대로 유지한 채 DOM 내용이 변경되는것을 확인하실 수 있습니다.

// **실행 결과**
// ![](https://cdn-api.elice.io/api-attachment/attachment/0d064a2c34b94e34b8bf4fd2ed19b253/3.gif)


//test.js
import React from 'react';

const test = () => {
  return <h1>test</h1>;
};

export default test;


//index.js
import React from 'react';
//1. index.js 에서 next/link를 불러오세요.
import Link from 'next/link';

function HomePage() {
  return (
    <>
      {/*2. Link 태그를 클릭할 때 CSR 방식으로 DOM을 변경해서 해당 경로로 가는 코드를 작성하세요. */}
      <ul>
        <li>
          <Link href="/home">
            <a>home으로 갑니다!</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about으로 갑니다!</a>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <a>test로 갑니다!</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

//export default HomePage;

//움 내가 이해한걸로는
// 처음 렌더링되는 index.js 는 SSR 방식
// 다음 각 링크를 눌러서 /home /about /test로 이동한는건 CSR 방식
//클라이언트(유저) 쪽에서 자바스크립트로 페이지를 구성하고 렌더링한다

// 페이지 단위라는건 /home /about /test 이게 페이지 단위라는거 같음
//Next.js 에서 페이지 단위로 라우팅이 처리됨

// 항상 pages 폴더안에 페이지 파일들이 있어야하며,
// 각 파일들의 이름으로 url 이름이 결정됨

//이런 특징들 때문에 ssr csr을 조합하여 초기 로딩 속도를 개선하고
//검색 엔진 최적화를 향상시키면서,
//동시에 인터랙티브한 사용자 경험을 제공하는데 유리하다
//개발자는 파일 이름을 통해 간단하게 라우팅을 구성할 수 있다


//home.js
import React from "react";

//export default function home() {
  return <h1>home</h1>;
//}


//about.js

import React from 'react';

const about = () => {
  return <h1>about me</h1>;
};

//export default about;

