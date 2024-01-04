// string과 number 두 타입이 허용될수 있게 union type을 선언해주세요
const printMessage = (message: string|number) => {
    console.log(message)  
}

const message1 = printMessage(1234);
const message2 = printMessage('hello');

printMessage(1234)
printMessage("hello")

//console.log(message2.length);
//message2.length;
