let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
   // this.createMatrix;
    this.inventory=inventory;

    let obj=this.inventory;
    let row=[];
    let arr=[];
    for (let idx in obj){
      //console.log('IDX=',idx);
      for (let idxx in obj[idx]["shoes"]){
        //console.log('IDXX=',idxx);
        row=[];
        row.push(obj[idx]["name"]);
        row.push(obj[idx]["shoes"][idxx]["name"]);
        row.push(obj[idx]["shoes"][idxx]["price"]);
        arr.push(row);
      }
      //console.log('ROW',row);
      //console.log('ARR',arr);
    }
    //console.log('out');
    return arr;
}

//console.log(renderInventory(currentInventory).createMatrix());
console.log(renderInventory(currentInventory))




