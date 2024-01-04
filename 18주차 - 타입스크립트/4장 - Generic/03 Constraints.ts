// 제네릭 매개변수 타입이 boolean이 허용되게 수정해주세요.
const printMessage = <T extends string | number |boolean >(message: T): void => {
    console.log(message)  
}

printMessage<boolean>(true)