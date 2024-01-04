console.log(process.arch); // Node.js가 컴파일된 프로세서의 아키텍처
console.log("==============");

console.log(process.argv); // 프로세서가 시작될 때 명령어와 함께 전달된 인수
console.log("==============");

console.log(process.env); // 사용자 환경 정보를 가진 객체
console.log("==============");
// process.exit(0); // 프로세스 종료
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log("==============");

console.log(process.platform); // Node.js가 컴파일된 운영체제 플랫폼
console.log("==============");

console.log(process.uptime()); // 프로세스가 실행된 시간
console.log("==============");

console.log(process.version); // Node.js의 버전
console.log("==============");

console.log(process.versions); // Node.js에 종속된 프로그램의 버전 정보를 가진 객체
console.log("==============");
