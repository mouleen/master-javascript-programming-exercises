function findPairForSum(array, number) {
  // your code here
  let def=[];
  for (let i in array){
    for (let j in array){
      if (i!=j){
        console.log(array[i]+'+' + array[j]);    
        let sum=array[i]+array[j];
        if (sum == number){
          return [array[i],array[j]];
        }
      }
    }
  }
  return def;
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
