interface Animal {
    makeSound(): void
  }
  
  // Dog class에 Animal interface를 implements합니다.
  // 따라서 interface가 가지고 있는 함수를 class에서 구현해야 합니다.
  class Dog implements Animal{
      // makeSound() 함수를 구현해주세요.
      // 함수 호출 시, "멍멍" 콘솔이 나타날수 있게 cosole.log()를 구현해주세요
      makeSound() : void {
          console.log('멍멍');
      }
  }
  
  const dog = new Dog();
  dog.makeSound(); // 멍멍 출력