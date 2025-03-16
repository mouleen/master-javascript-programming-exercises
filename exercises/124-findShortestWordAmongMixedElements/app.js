function findShortestWordAmongMixedElements(arr) {
    // your code here
    let def=''
    let short_word=def;
    let ret = arr.filter(item => typeof item === 'string');
    
    if (Array.isArray(arr) && arr.length && ret.length){        
        short_word=ret[0];
        for (let i in ret){
            if ( ret[i].length  < short_word.length){
                short_word=ret[i];
            }
        }
        /*return ret.reduce((a,b) => {
            return ( a.length < b.length )? a : b;
        });*/
    }
    return short_word;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

output = findShortestWordAmongMixedElements([4, 'two', 2, 'three',1,'one']);
console.log(output); // --> 'two'