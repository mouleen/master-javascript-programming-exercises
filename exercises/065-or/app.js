function or(expression1, expression2) {
  // your code here
  // si son iguales 
    // si son true ambos false = false
    //  si son ambos true = true
  // si son diferentes true
  let ret;
  // true true
  if ((expression1 === expression2) && (expression1 && expression2)){
    ret=true;
    // false false
  }else if ((expression1 === expression2) && (!expression1 && !expression2)) {
      ret=false;
  }else{ 
    // false true o true false
    ret=true;
  }
  return ret;
}

let output = or(true, false);
console.log(output); // --> true;

output = or(true, true);
console.log(output); // --> true;

output = or(false, false);
console.log(output); // --> false;