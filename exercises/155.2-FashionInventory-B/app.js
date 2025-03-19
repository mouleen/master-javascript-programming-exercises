let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let sum=0;
    let arr=[];
    for (let idx in inventory){
      //console.log(inventory[idx]['name']);
      //arr.push(inventory[idx]['name']);
      sum=0;
      let tmp={};
      let tot=1;
      tmp['name']=inventory[idx]['name']
      for (let idxx in inventory[idx]['shoes']){
       // console.log(inventory[idx]['shoes'][idxx]['price'])
        sum=sum+inventory[idx]['shoes'][idxx]['price'];
        tot=(Number.parseInt(idxx) + 1); 
        //console.log('TOT',tot);
      }
      tmp['averagePrice'] = sum / tot;
      arr.push( tmp );
    }
    return arr;
}

console.log(renderAverageCostPerDesigner(currentInventory));
