class Animal {
    // 코드가 정상 동작 할수 있게 접근제어자를 수정해주세요.
    protected name: string
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);    
    }
    
    makeSound() {
      console.log(this.name + " 멍멍!!")
    }
  }
  
  const dog = new Dog("진돗개")
  dog.makeSound() // 진돗개 멍멍!! 출력
  