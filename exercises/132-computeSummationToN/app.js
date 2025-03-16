function computeSummationToN(n) {
  // your code here
  let suma=0;
  for (let i=0;i<=n;i++){
      suma=suma+i;
  }
  
  return suma;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

