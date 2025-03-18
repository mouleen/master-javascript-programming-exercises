function getStringLength(string) {
    // your code here
    length=0;
    for (let i in string){
        length++;
    }
    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5
