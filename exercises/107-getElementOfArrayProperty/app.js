function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if( Object.hasOwn(obj,key) && Array.isArray(obj[key]) && obj[key].length){
        return obj[key][index];
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
