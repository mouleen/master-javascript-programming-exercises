function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
    string=this.parenthesize(this.getAreaCode()) +' '+ this.getExchangeCode()+'-'+this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  let string='';
  for (let i=0;i<3;i++){
      string=string + this.numbers[i];
  }
  return string;
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  let string='';
  for (let i=3;i<6;i++){
    string=string + this.numbers[i];
  }
  return string;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  let string='';
  for (let i=6;i<this.numbers.length;i++){
    string=string + this.numbers[i];
  }
  //return this.getExchangeCode(string)+'-'+this.getLineNumber;
  return string;
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
//console.log(number.getAreaCode()); // --> "(650) 835-9172"
console.log(number.render()); // --> "(650) 835-9172"
