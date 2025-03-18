function multiply(num1, num2) {
    // your code here
    var tot=0;
    var isNegative=false;
    if( (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        isNegative=true;
    }
    if ( Number.isInteger(num1) && Number.isInteger(num2)){
        // valores absolutos
        //console.log(num1,num2);
        var absNum1=Math.abs(num1);
        var absNum2=Math.abs(num2);
        
        for (let i=0;i<absNum2;i++){
            tot=tot+absNum1;
        }
        // Alguno negativo
        if(isNegative) {
             tot=-tot;
        }
    }
    return tot;
}

let output = multiply(4, 7);
console.log(output); // --> 28

output = multiply(4, -7);
console.log(output); // --> -28

output = multiply(-19, 3);
console.log(output); // --> -57

output = multiply(-19, -3);
console.log(output); // --> 57