function op(accumulator, a) {
  return accumulator * a;
}

function computeProductOfAllElements(arr) {
  // your code here  
    if( Array.isArray(arr) && arr.length){
        let sum = arr.reduce(op, 1);
        return sum
    }else{
        return 0;
    }     
}


/*
Pasando la funcion como parametro explicito
const res = arr.reduce((acc, val) => {
  acc = acc * val;
  return acc;
}, 1);
*/


let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
