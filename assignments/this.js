/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*


* 1. Window Binding - Unless stated otherwise the default binding of `this` is to the window/console object.


* 2. Implicit Binding - Implicit binding means that the `this` keyword refers to the object to the left of the dot. (Dot Notation)


* 3. New Binding - When `this` is used with constructor functions, this referes to the specific instance of the object that is created and returned by the constructor function. It actually creates brand new objects -- hence the name 'Constructor Function'. For example, if you pass 3 parameters to the constructor function such as breed, name, and type, and then invoke a function with the *new* keyword `this` will be bound to those three objects (this.breed, this.name, this.type).


* 4. Explicit Binding -  Implicit binding refers to whatever is left of the dot (dot notation). For example:

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
//   "use strict";  Doesn't allow items to be bound to the window object
const favFood = function() {

console.log(this.food);
};

const mandiFav = {
food: `burrito`
};

//favFood(); returns undefined
window.food = `Pork Carnitas`; // Binds Pork Carnitas to the window object, otherwise it returns undefined.
favFood();

// Principle 2
// code example for Implicit Binding
const Person = function(name, age){
return {
  name: 'Mandi',
  age: 33,
  sayName: function() {
    console.log(`Hello, my name is ${this.name}.`);
},
daughter: {
  name: 'KT',
  sayName: function() {
      console.log(`My daughter's name is ${this.name}.`);
    }
  }
};
};

var mandi = Person('Mandi', 33);
mandi.sayName();
mandi.daughter.sayName();

// Principle 3
// code example for New Binding
var Pet = function(breed, name, type) {
this.breed = breed;
this.name = name;
this.type = type;
};

const Cat = new Pet('Tabby', 'Mau', 'Cat');

// Principle 4
// code example for Explicit Binding

const dogBark = function(treat1, treat2, treat3) {
console.log(`My name is ${this.name}, I like to bark at the mail man!`)
};

const odie = {
name: 'Odie',
breed: 'Mastif-Pit mix'
};

dogBark.call(odie);


// =========Do I need this, IDFK =============
// .call, .apply overide the binding of this
const dogTreats = function(treat1, treat2, treat3) {
  console.log(`My name is ${this.name}, and I like ${treat1}, ${treat2}, and ${treat3}.`)
};

const trooper = {
name: 'Trooper',
breed: 'Mastif-Pit mix'
};

const treats = ['beef bones', 'carrots', 'peanut butter'];

dogTreats.call(trooper, treats[0], treats[1], treats[2]); //call
dogTreats.apply(trooper, treats); //apply
const moreDogTreats = dogTreats.bind(trooper, treats[0], treats[1], treats[2]); //bind

moreDogTreats();
