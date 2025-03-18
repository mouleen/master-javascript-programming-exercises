function getAllKeys(obj) {
  // your code here
  var arrayret=[];
  for (let i in obj){
    console.log(i);
    arrayret.push(i);
  }
  return arrayret;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
