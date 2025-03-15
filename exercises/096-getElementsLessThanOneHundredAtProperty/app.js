// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        return obj[key].filter((word)=> word < 100);
    }else{
        return [];
    }
}
let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]