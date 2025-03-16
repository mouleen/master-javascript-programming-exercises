function filterEvenElements(arr) {
    // your code here
    if( Array.isArray(arr) && arr.length){
        let ret = arr.filter((item) => item % 2 === 0);
        return ret;
      }else{
        return [];
      }
    
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
