function findShortestElement(arr) {
    // your code here
    let def='';  // default value
    let short_word=def;
    if (Array.isArray(arr) && arr.length){
        short_word=arr[0];
        for (word in arr){
            if( word.length < short_word.length){
                short_word=word;
            }
        }
    }
    return short_word;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

output = findShortestElement();
console.log(output); // --> 'a'

output = findShortestElement(['a', 'b', 'cu','b']);
console.log(output); // --> 'a'

// TODO: Ver en clase porque no pasa el test