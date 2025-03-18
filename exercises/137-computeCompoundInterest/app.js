function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var interestRate = 1 + interestRate / compoundingFrequency;
  var interestRateCompounded=interestRate ** (compoundingFrequency * timeInYears);
  var totalNeto = principal * interestRateCompounded;
  return totalNeto - principal;
 
  return total - n;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543

//totalTimes=4 * 6 = 24
//de 1 a 24 multiplica valor * interes
//1500 * 1.043 = valor * 1.043 = valor * 1.043 = valor * 1.043 = totalAnual 