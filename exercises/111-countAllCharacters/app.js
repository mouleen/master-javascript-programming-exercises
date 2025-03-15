// Write your function here
function countAllCharacters(str) {
    let obj={};
    for (let i in str){
        obj[str[i]]=str.split(str[i]).length -1;
        /*console.log(str[i]);
        console.log(str.split(str[i]).length -1);
        console.log(obj);*/
        
    }
    return obj;
}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}