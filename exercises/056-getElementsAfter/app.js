function getElementsAfter(array, n) {
  // your code here
  let ret = array.map((x) => x);
  ret=ret.slice(array.length - n, array.length);
  return ret;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
