function removeFromFrontOfNew(arr) {
    // your code here
//    let ret=arr;

    let ret = arr.map((x) => x);
    ret.shift();
    return ret;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
