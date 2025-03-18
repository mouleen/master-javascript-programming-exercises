function sumDigits(num) {
    // your code here
    var strNum = num.toString(); // Convertimos numero a string
    var firstChar=strNum[0]; // tomamos el primer caracter
    //console.log(firstChar);
    var symbol='';
    var tot=0;
    var initPosition=0;
    if (firstChar === '-'){
        symbol=firstChar;
        initPosition=1;
    }
    //console.log(symbol);
    for (let i=initPosition;i<strNum.length;i++){
        num=(initPosition == 1 && i == 1)? symbol+strNum[i]:strNum[i];
        //console.log(num);
        item=+(num);
        
        tot = tot + item;
    }
    //return symbol + tot
    return  tot


    
}

let output = sumDigits(-316);
console.log(output); // --> 4

output = sumDigits(316);
console.log(output); // --> 4