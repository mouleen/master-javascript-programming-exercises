function addFullNameProperty(obj) {
  // Add your code after this line
  let fName = obj.firstName + ' ' + obj.lastName;
  obj.fullName = fName;
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'