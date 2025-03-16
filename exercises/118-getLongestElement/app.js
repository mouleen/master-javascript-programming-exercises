function getLongestElement(arr) {
    // your code here
    let size_this=0
    let size_max=0
    let word=''
    if (Array.isArray(arr) && arr.length){
        for (let i in arr){
            size_this=arr[i].length;
            size_max= ( i===1 ) ? arr[i].length : size_max;
            if(size_max < size_this){
                size_max = size_this;
                word=arr[i];
            }
        }
        return word;     
    }else{
        return '';
    }
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
