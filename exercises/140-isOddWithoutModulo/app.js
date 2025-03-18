function isOddWithoutModulo(num) {
        // your code here
        var def=true
        var absNum=Math.abs(num);
        // Cambia si es positivo o negativo / Quitamos el signo 
        for (let i=0;i<=absNum;i+=2){
            if (i===absNum) return false;
        }
        return def;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true

output = isOddWithoutModulo(16);
console.log(output); // false

output = isOddWithoutModulo(-11);
console.log(output); // true

output = isOddWithoutModulo(-12);
console.log(output); // false


output = isOddWithoutModulo(0);
console.log(output); // false