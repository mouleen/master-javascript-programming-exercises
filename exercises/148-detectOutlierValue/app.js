function detectOutlierValue(string) {
    // your code here
    var val=string.split(' ');
    var arr=[];
    var tote=toto=0;

    for (element of val){

        if ( element % 2 === 0){
            arr.push(true);
            tote++;
        }else{
            arr.push(false);
            toto++;
        }
    }
    if(toto>tote){
        // son odd
        return arr.indexOf(true)+1;
    }else{
        // son even
        return arr.indexOf(false)+1;
    }
    
    return val;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
