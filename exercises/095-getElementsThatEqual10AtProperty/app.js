// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        return obj[key].filter((word)=> word === 10);
    }else{
        return [];
    }
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]