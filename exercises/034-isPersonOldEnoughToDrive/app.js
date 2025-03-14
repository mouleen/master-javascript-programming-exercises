function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  return (person.age >=16);
}

let obj = {
  age: 15
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true