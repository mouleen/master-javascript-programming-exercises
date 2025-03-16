function multiplyBetween(num1, num2) {
    // your code here
    let multiply=0;
    if(num1 <= num2){
        multiply=num1
        for (let i=num1+1;i<num2;i++){
            multiply=multiply*i;
        }
    }
    
    return multiply;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24

output = multiplyBetween(1, 4);
console.log(output); // --> 24