function ASCIISuma(array) {
  let suma = 0;
  for(let i = 0; i < array.length; i++) {
      let char_code = array[i].charCodeAt(0);
      suma += char_code;
  }
  return suma;
} 
function isRotated(str1, str2) {
    // your code here
    if ((str1.length === str2.length) && (ASCIISuma(str1) == ASCIISuma(str2))){
      return true;
    }
    return false;
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
