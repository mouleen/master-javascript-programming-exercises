function isIsogram(text) {
  // your code here
  let textL=text.toLowerCase();
  let arr=[];
  let def=true;
  for (let i=0;i<textL.length -1;i++){
    let char_code = textL[i].charCodeAt(0);
    if(arr.indexOf(char_code) < 0){
      arr.push(char_code);
    }else{
      return false;
    }
  }
  return def;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
console.log(isIsogram("Cactus"));