function filterOddElements(arr) {
  // your code here
  if( Array.isArray(arr) && arr.length){
    let ret = arr.filter((item) => item % 2 != 0);
    return ret;
  }else{
    return [];
  }

}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
