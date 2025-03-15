function add(accumulator, a) {
  return accumulator + a;
}
function getAverageOfElementsAtProperty(obj, key) {
  // aca quede 
  if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
     let sum = obj[key].reduce(add, 0);
     return sum/obj[key].length
  }else{
    return 0;
  }
}


let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  