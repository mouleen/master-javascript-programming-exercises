// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        return obj[key].filter((word)=> word.length % 2 != 0);
    }else{
        return [];
    }
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']