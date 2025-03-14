function checkAge(name, age) {
  // your code here
  msg1='Go home, '+ name +'!';
  msg2='Welcome, '+ name +'!';
  return (age >=21)?msg2:msg1;
}
console.log(checkAge('tito',22));

