function findSmallestElement(arr) {
   // your code here
   let def=0; //default
   if (Array.isArray(arr) && arr.length){
       return arr.reduce((a,b) => Math.min(a,b));
   }else{
       return def;     
   }
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

output = findSmallestElement();
console.log(output); // --> 1