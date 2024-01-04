//

const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
Customer.insertMany(
//4. 새로운 사용자 두명의 이름과 이메일 주소를 `Customer.insertMany([])`를 사용해서 insert 하세요.
[
    {
        name: 'Danny Choi',
        email: 'dchoi@gmail.com',
    },
    {
        name: 'Moong Bae',
        email: 'moobae@gmail.com',
    },
]
)
  .then((insertedCustomers) => {
    console.log("Inserted Customers are: ", insertedCustomers);
    //5. `Customer.deleteOne()`를 사용해서 4번에서 추가된 두 사용자중 한 사람의 이름을 삭제하세요.
    return Customer.deleteOne({ name: 'Danny Choi' });
  })
  .then((deletedCustomer) => {
    
    console.log("Deleted: ", deletedCustomer);
    return Customer.find();
  })
  .then((remainingCustomers) => {
    console.log("Remaining Customer : ", remainingCustomers);
    customerId = remainingCustomers[0]._id;
    return Order.create({
      customer_id: customerId,
      total: 45,
    });
  })
  .then((order) => {
    console.log("Current Customer's Order is : ", order);
    return Order.find({ customer_id: customerId });
  })
  .then((selectedOrder) => {
    console.log("Current Customer's Selected Order is : ", selectedOrder);
  })
  .catch((e) => {
    throw e;
  });
