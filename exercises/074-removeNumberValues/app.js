function removeNumberValues(obj) {
    // your code here
    for (let i in obj){
        if (Number.isInteger(obj[i])){
            delete obj[i];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
