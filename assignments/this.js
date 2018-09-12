/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding

Occurs when the this is used in conjunction with a . infront of it. 

* 2. Explicit Binding

occurs when this is used with a function method call,apply or bind. In the case of the Bind it could be mistook for implicit because the this is lead by a paramater ..


* 3. New Binding



* 4. Window Binding

window binding is using the this keyword to call on an object in the global scope.
most of the time this occurs on accident and it returns undefined
*
* write out a code example of each explanation above
*/
//------------------------------------------
// Principle 1// code example for Window Binding
this.name();

//-------------------------------------------
// Principle 2// code example for Implicit Binding


let user = {
  name: 'Tom',
  age: 41,
  speak:function(){
    console.log(`${this.name} says Hi!!`)
  }
}
user.speak();
// -------------------------------------------
// Principle 3// code example for New Binding
let Car = function(make, model ,year){
  this.make = make;
  this.model = model;
  this.year = year; 
};
let mycar = new Car('Dodge','Charger',2018);

//--------------------------------------------
// Principle 4 // code example for Explicit Binding
let sayName = function (){
  console.log('my name is '  + this.name)
}
let tom = {
  name:'Thomas',
  age:'40'
}
sayName.call(tom);

