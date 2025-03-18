let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  greeting='Welcome! Is this your first time?';
  if(customerData[firstName]){
    if(customerData[firstName].visits == 1){
      return "Welcome back, Joe! We're glad you liked us the first time!";
    }
    if (customerData[firstName].visits > 1){
      return "Welcome back, Carol! So glad to see you again!"
    };
  }
  return greeting;
}

console.log(greetCustomer('Joes')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
