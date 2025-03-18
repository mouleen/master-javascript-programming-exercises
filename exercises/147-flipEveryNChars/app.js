function flipEveryNChars(input, n) {
    // your code here
    var x='';

    for (let i=0;i<input.length;i+=n){
        let jtop=i+n-1 // 0 
        var tmpstr='';
        for (let j=jtop;j>=i;j--){
            if (j < input.length){
                tmpstr=tmpstr+input[j];
            }
        }
        x = x + tmpstr;
    }
    return x;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
