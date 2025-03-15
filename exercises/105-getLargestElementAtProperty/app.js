function getLargestElementAtProperty(obj, key) {
    // your code here
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
      return Math.max.apply(Math,obj[key]); 
    }else{
      return [];
    }
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
