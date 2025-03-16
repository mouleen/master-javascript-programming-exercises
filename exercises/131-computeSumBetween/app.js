function computeSumBetween(num1, num2) {
    // your code here
    let suma=0;
    if(num1 <= num2){
        suma=num1
        for (let i=num1+1;i<num2;i++){
            suma=suma+i;
        }
    }
    
    return suma;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
