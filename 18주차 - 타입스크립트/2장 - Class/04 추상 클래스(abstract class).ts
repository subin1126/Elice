abstract class Animal {
    protected name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    abstract makeSound(): void
  }
  
  class Dog extends Animal {
    // constructor를 구현해주세요
      constructor(name: string){
          super(name);
      }
    // 추상메소드 makeSound()를 Dog 클래스 내부에서 구현해주세요
    // makeSound() 메소드에 console.log를 구현해주세요.
    makeSound(): void{
        console.log(this.name + " 멍멍!!");
    }
  }
  
  // 클래스 name필드에 값 "진돗개"를 할당해주세요
  const dog = new Dog('진돗개')
  dog.makeSound() // 진돗개 멍멍!!
  