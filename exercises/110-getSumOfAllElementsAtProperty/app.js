function add(accumulator, a) {
    return accumulator + a;
  }

function getSumOfAllElementsAtProperty(obj, key) {
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        let sum = obj[key].reduce(add, 0);
        return sum
    }else{
        return 0;
    }     
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
