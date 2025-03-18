function transformEmployeeData(array) {
  // your code here
  /* Hice este funciono pero da error porque dice que no retorna objeto
  var obj={};
  var newobj={};
  for (let i in array){
    obj[i]=Object.fromEntries(array[i]);
  }
  newobj=Object.values(obj);
  return newobj;
  */
  let result = [];
  for (let x of array) {
    let aux = {};
    for (let y of x) {
      aux[y[0]] = y[1];
    }
    result.push(aux);
  }
  return result;
}
// TODO Ver porque no lo tomo
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]