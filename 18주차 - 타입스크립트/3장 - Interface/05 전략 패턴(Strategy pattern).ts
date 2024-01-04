interface PaymentStrategy {
    pay(): void
  }
  
  // PaymentStrategy를 상속받는 두 개의 클래스를 구현해주세요.
  // 각 클래스의 `pay()` 메소드를 호출했을 때 cash pay, card pay가 출력되어야 합니다.
  class CashPaymentStrategy implements PaymentStrategy {
      pay(): void {
          console.log('cash pay');
      }
  }
  
  
  class CardPaymentStrategy implements PaymentStrategy {
      pay(): void {
          console.log('card pay')
      }
  }
  
  class VendingMachine {
    private paymentStrategy: PaymentStrategy
  
    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
      this.paymentStrategy = paymentStrategy
    }
  
    pay() {
      this.paymentStrategy.pay()
    }
  }
  
  const vendingMachine = new VendingMachine()
  
  vendingMachine.setPaymentStrategy(new CashPaymentStrategy())
  vendingMachine.pay() // cash pay
  
  vendingMachine.setPaymentStrategy(new CardPaymentStrategy())
  vendingMachine.pay() // card pay
  