// Write your function here
function getFirstElementOfProperty(obj,key){
    if ( Object.hasOwn(obj, key) && (Array.isArray(obj[key]))){
        return obj[key].shift();
    } else {
        return undefined
    }
}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1