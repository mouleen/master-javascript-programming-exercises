function squareElements(arr) {
  // your code here
  if( Array.isArray(arr) && arr.length){
    let ret = arr.map((x) => Math.pow(x,2));
    return ret;
  }else{
    return [];
  }
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
