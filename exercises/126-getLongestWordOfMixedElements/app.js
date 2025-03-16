function getLongestWordOfMixedElements(arr) {
    // your code here
    let def=''
    let long_word=def;
    let ret = arr.filter(item => typeof item === 'string');
    
    if (Array.isArray(arr) && arr.length && ret.length){        
        long_word=ret[0];
        for (let i in ret){
            if ( ret[i].length  > long_word.length){
                long_word=ret[i];
            }
        }
        /*return ret.reduce((a,b) => {
            return ( a.length < b.length )? a : b;
        });*/
    }
    return long_word;
    
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
