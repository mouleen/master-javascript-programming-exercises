function transformFirstAndLast(array) {
  // your code here
  var value=array.pop();
  var key=array.shift();
  var obj={};

  obj[key]= value

  return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
