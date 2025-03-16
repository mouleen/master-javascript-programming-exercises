function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let def=0
  let short_word=def;
  let ret = arr.filter(item => typeof item === 'number');
  
  if (Array.isArray(arr) && arr.length && ret.length){        
      short_word=ret[0];
      // opcion con for
      /*for (let i in ret){
          if ( ret[i]  < short_word){
              short_word=ret[i];
          }
      }*/
     // opcion con reduce 
      return ret.reduce((a,b) => {
          return ( a < b )? a : b;
      });
  }
  return short_word;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
