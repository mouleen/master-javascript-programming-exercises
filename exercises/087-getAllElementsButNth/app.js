function getAllElementsButNth(array, n) {
    // your code here
    let ret = array.map((x) => x);
    ret.splice(n, 1);
    return ret;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']


output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]