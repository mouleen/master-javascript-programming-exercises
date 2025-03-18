function convertObjectToList(obj) {
  // your code here
  let result = Object.entries(obj);
  return result;

}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
