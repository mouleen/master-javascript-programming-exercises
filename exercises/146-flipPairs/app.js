function flipPairs(input) {
    // your code here
    var x='';
    for (let i=0;i<input.length;i+=2){
        
        x = ( input[i+1])? x + input[i+1] + input[i]: x + input[i];
    }
    return x;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
