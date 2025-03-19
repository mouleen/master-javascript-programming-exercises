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

function getLaceNameDataForShoes(inventory) {
    // your code here
    let obj=[];
    let tmp=[];
    for (let idx in inventory){
      tmp=[];
      for (let idxx in inventory[idx]['shoes']){
       if(inventory[idx]['shoes'][idxx]['name'].indexOf('lace') >= 0 ){
          let words=inventory[idx]['shoes'][idxx]['name'].split(' ');
          let count=0;
          let target=0;
          for (let w in words){
            if( words[w].includes("lace")){
              target=count;
              //console.log('incluido')
            } 
            count++;
          }
          obj.push({nameWords : words, targetWordIndex:target});
         // console.log(words,target);
        }
      }
      
      //arr.push(tmp)
    }
    return obj;

}

console.log(getLaceNameDataForShoes(currentInventory));
