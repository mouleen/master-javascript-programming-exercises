function listAllValues(obj) {
  // your code here
  var arrayret=[];
  for (let i in obj){
    arrayret.push(obj[i]);
  }
  return arrayret;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
