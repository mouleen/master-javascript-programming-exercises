// Write your function here
function getNthElementOfProperty(obj,key,val){
        if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
            return obj[key][val];
        }
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2