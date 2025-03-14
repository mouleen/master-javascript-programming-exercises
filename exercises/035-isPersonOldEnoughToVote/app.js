function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return (person.age > 17);
}
let obj = {
  age: 17
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true