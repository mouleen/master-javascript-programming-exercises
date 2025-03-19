function findLongestPalindrome(sentence) {
  // your code here
  let def='';
  let paliWords={};
  let largestPali=0;

  for(let i=0; i<sentence.length;i++){
    let max=Math.floor(sentence.length/2);
    //console.log('max='+max,sentence.substr(0,max))
    for(let j=1; j<=max ;j++){
      //console.log('evaluo:'+sentence.substr(0,j));
      let tmpword1=sentence.substr(i,j)

      if(tmpword1.length > 1){
        //console.log('?Es Pali :' + tmpword1 + ' = '+ isPalindrome(tmpword1));
        if(isPalindrome(tmpword1)){
          let tmpLen=tmpword1.length;
          paliWords[tmpword1]=tmpLen;
          if ( largestPali < tmpLen ) largestPali = tmpLen;
        }
      }
    }
  }
  //console.log('paliwords' + paliWords);
  if (Object.keys(paliWords).length != 0){
    for (let pali in paliWords){
      if (paliWords[pali] == largestPali){
        return pali;
      }
    }
  }else{
    return def;
  }

}

function reverseString(string) {
  // your code here
  let str=string.toLowerCase();
  
  if (str === "") { // Termina recursion
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

function isPalindrome(word) {
  // your code here
  word=word.toLowerCase();
  var len=word.length
  var mitad=len/2
  var def='';
  if ( mitad % 2 == 0){ // Par
    //console.log(mitad, word.substr(0,mitad),word.substr(mitad,len));
    let p1=word.substr(0,mitad);
    let w2=word.substr(mitad,len);
    let p2=reverseString(w2);
    //console.log('? p1='+p1+' == p2='+p2);
    if (p2 === p1){
      return true;
    }else{
      return false;
    }
  }else{
    //console.log(mitad, word.substr(0,mitad),word.substr(mitad+1,len));
    let p1=word.substr(0,mitad);
    let w2=word.substr(mitad+1,len);
    let p2=reverseString(w2);
   // console.log('? p1='+p1+' == p2='+p2);
    if (p2 === p1){
      return true;
    }else{
      return false;
    }
  }
  return false;
}

//console.log(isPalindrome('lalal'));
//console.log(isPalindrome('tralalalarte'));
//console.log(findLongestPalindrome('tralalalart'));
console.log(findLongestPalindrome("Madam, i'm adam"));
let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"

