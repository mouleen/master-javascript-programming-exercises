// Write your function here
function select(arr,obj){
    //https://www.30secondsofcode.org/js/s/filter-object-keys/
    const pick = (obj, arr) =>
        Object.fromEntries(Object.entries(obj).filter(([k]) => arr.includes(k)));
    return pick(obj,arr);
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
