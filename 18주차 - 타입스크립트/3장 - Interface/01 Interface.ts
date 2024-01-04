interface Person {
    job: string
  }
  
  function sayMyJob(obj: Person) {
    console.log(obj.job)
  }
  
  // developer 변수에 interface Person 타입이 선언이 되어있습니다.
  // 오류가 발생하지 않게, developer 변수에 프로퍼티값을 선언해주세요
  const developer: Person = {
      job: '개발자'
  }
  
  sayMyJob(developer) // 개발자
  