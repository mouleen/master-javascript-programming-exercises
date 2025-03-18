function fromListToObject(array) {
  // your code here
  var obj={};
  for (let i in array){
    //console.log( i +'-'+ array[i][0] +'=>'+ array[i][1]);
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
