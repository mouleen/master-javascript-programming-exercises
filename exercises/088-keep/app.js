// Write your function here
function keep(arr,str){
    return arr.filter((word) => word === str);
}


let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]