function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
      return obj[key].filter((word)=> word.length % 2 === 0);
   }else{
     return [];
   }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
