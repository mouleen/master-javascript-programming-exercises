function getOddElementsAtProperty(obj, key) {
    // your code here
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
      return obj[key].filter((item)=> item % 2 != 0);
    }else{
      return [];
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
