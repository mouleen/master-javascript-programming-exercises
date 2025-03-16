function joinArrayOfArrays(arr) {
  // your code here
  let retarr=[];
  for (let i in arr){
    retarr=retarr.concat(arr[i]);
   // console.log(retarr);
  }
  return retarr;
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
