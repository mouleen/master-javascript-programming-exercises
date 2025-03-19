let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
let sinblack=[
  {
    name: 'Adidas',
    shoes: [
      { name: 'ZX 2K BOOST SHOES', price: 150 },
      { name: 'MULTIX SHOES', price: 80 },
    ],
  },
  {
    name: 'Nike',
    shoes: [
      { name: 'Jordan 6 Rings', price: 170 },
      { name: 'Nike Air Max 2090 EOI', price: 160 },
    ],
  },
];
function renderInventory(shoeList) {
    // your code here
    let arr=[];
    let tmp=[];
    for (let idx in shoeList){
      tmp=[];
      for (let idxx in shoeList[idx]['shoes']){
       if(shoeList[idx]['shoes'][idxx]['name'].indexOf('black') >= 0 ){
        tmp.push(shoeList[idx]['name'],shoeList[idx]['shoes'][idxx]['name'],shoeList[idx]['shoes'][idxx]['price']);
       }
      }
      arr.push(tmp)
    }
    if(tmp.length <=0 ){
      arr=[];
    }
    return arr;
}

console.log(renderInventory(sinblack));
console.log(renderInventory(currentInventory));
