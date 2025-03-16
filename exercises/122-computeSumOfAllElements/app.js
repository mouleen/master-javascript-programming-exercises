function add(acumulator,a){
  return acumulator + a;
}
function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce(add,0);
  
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
