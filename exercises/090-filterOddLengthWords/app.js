// your code here
function filterOddLengthWords(words) {
    return words.filter((word) => word.length % 2 != 0);
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
