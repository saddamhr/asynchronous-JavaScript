const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const processedOrder = (customer, callback) => {
  console.log(`Processing order for ${customer}`);

  setTimeout(() => {
    console.log(`Cooking completed`);
    console.log(`Order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Completed order for ${customer}`);
};

takeOrder(`Customer 1`, (customer) => {
  processedOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
