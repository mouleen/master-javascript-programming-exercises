function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let def=0
    let max_num=def;
    let ret = arr.filter(item => typeof item === 'number');
    
    if (Array.isArray(arr) && arr.length && ret.length){        
        max_num=ret[0];
        // opcion con for
        /*for (let i in ret){
            if ( ret[i]  < max_num){
                max_num=ret[i];
            }
        }*/
       // opcion con reduce 
        return ret.reduce((a,b) => {
            return ( a > b )? a : b;
        });
    }
    return max_num;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
