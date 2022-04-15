const processOrder = (customer) => {
  console.log(`Processing order for ${customer}`);

  setTimeout(() => {
    console.log(`Cooking completed`);
  }, 3000);

  console.log(`Order processed for ${customer}`);
};

console.log(`Take order for customer 1`);
processOrder(`Customer 1`);
console.log(`Completed order for customer 1`);
