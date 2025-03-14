function removeFromBackOfNew(arr) {
  // your code here
  let ret = arr.map((x) => x);
  ret.pop();
  return ret;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
