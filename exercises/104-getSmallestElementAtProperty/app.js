function getSmallestElementAtProperty(obj, key) {
  // your code here
  if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
    return Math.min.apply(Math,obj[key]); //Math.max.apply(Math, array);
  }else{
    return [];
  }
  return obj;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
