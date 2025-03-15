function getLengthOfLongestElement(arr) {
    // Your code here
    let lengths=[]
    if (Array.isArray(arr) && arr.length){
        for (let i in arr){
            lengths.push(arr[i].length);
           // console.log(lengths);
        }     
        //const max = arr.reduce((a, b) => Math.max(a, b)
        return lengths.reduce((a,b) => Math.max(a,b));
    }else{
        return 0;
    }

}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
