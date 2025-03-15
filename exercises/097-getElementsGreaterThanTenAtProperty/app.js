// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        return obj[key].filter((word)=> word > 10);
    }else{
        return [];
    }
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]