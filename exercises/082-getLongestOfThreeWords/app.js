function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [ word1, word2, word3 ];
    let order=arr.reduce(function (a, b) {
            if (a.length >= b.length) {
                return a;
            }else {
                return b;
            }
        });
    return order;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

output = getLongestOfThreeWords('thesee', 'threeds', 'word');
console.log(output); // --> 'these'