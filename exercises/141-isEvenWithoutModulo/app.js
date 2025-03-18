function isEvenWithoutModulo(num) {
    // your code here
    var def=false
    // Cambia si es positivo o negativo / Quitamos el signo 
    var absNum=Math.abs(num);
    for (let i=0;i<=absNum;i+=2){
        if (i===absNum) return true;
    }
    return def;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
