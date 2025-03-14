// Write your function here
function add(accumulator, a) {
    return accumulator + a;
  }
function computeAverageOfNumbers(input){
    const sum = input.reduce(add, 0); // with initial value to avoid when the array is empty
   console.log(sum);
    return (sum === 0)? 0 : sum/input.length;
}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3