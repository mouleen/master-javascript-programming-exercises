let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    //obj1.concat(obj2);
    for (let i in obj2){
        if (!obj1.hasOwnProperty(i)){
            obj1[i]=obj2[i];
        }
    }
    return obj1;
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}