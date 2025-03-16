function getLengthOfShortestElement(arr) {
    // your code here
    let lengths=[]
    if (Array.isArray(arr) && arr.length){
        for (let i in arr){
            lengths.push(arr[i].length);
        }     
        return lengths.reduce((a,b) => Math.min(a,b));
    }else{
        return 0;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
