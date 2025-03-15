// Write your function here
function removeElement(arr,str){
    return arr.filter((word) => word != str);
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]