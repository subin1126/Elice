// package.json 에 scripts 항목을 추가하세요.

//     "scripts": {
//         "dev": "next dev -p 8080",
//         "build": "next build",
//         "start": "PORT=8080 react-scripts start",
//         "lint": "next lint"
//     }
// Copy
// 이렇게 추가되면 실행시 "next dev"라는 명령어가 실행되어 Next의 개발 서버가 켜지게 됩니다.
// 페이지 컴포넌트화
// Next.js 는 페이지를 기반으로 빌드하기 때문에 pages 폴더 내에있는 파일 이름을 기반하여 라우팅이 동작됩니다.

// pages라는 디렉토리를 만들고 home.js와 index.js컴포넌트를 형성해서 해당 라우트에 따라 페이지가 바뀌도록 코드를 작성하세요.

// home.js와 index.js 모두 함수형 컴포넌트로 export 하세요.

// 코드를 다 작성하셨다면 pages 디렉토리 내 각 파일에 해당하는 요소가 포함된 html을 서버가 응답해줍니다. (SSR 방식)

//-----------------------------------------------

//home.js
import React from 'react';

const home = () => {
    return <div>Welcome to Next.js!</div>
}

export default home;


//index.js
// import React from 'react';
// import Home from './home.js';

// const index = () => {
//   return (
//     <>
//       <h2>
//         hi
//         <Home />
//       </h2>
//     </>
//   );
// };

// export default index;
