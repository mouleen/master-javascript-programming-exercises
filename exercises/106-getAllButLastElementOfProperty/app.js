function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
      obj[key].pop();
      return obj[key];
    }else{
      return [];
    }
    return obj[key];
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
