function getLargestElement(arr) {
  // your code here
  let def=0;  // default value
  let large_item=def;
  if (Array.isArray(arr) && arr.length){
      large_item=arr[0];
      for (item in arr){
          if( arr[item] > large_item){
              large_item=arr[item];
            }
      }
  }
  return large_item;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;