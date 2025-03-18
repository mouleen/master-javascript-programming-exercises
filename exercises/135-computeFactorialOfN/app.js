function computeFactorialOfN(n) {
    // your code here
  if (n < 0){
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    // Se aplica recursion
    // Se llama a si mismo con el valor de n - 1
    // n=4
    // retorno  n=4 * 3 * 2 * 1 
    return (n * computeFactorialOfN(n - 1));
  }
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
