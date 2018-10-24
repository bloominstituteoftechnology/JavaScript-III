/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Global Object Binding - in global scope, the value of this will be the window object
* 2. Implicit Binding - A function that is called by a preceding dot, the object before that dot is going to be the reference for the keyword "this"
* 3. New Binding - when a constructor function is used (when an object is being created with as a new Object, the "this" keyword will refer to that specific instance of that object),
* 4. Explicit Binding - whenever we use .call or .apply method, the "this" keyword will be explicitly implied.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var hello = "How's it going?"
console.log(window.hello);

// Principle 2

// code example for Implicit Binding
const Superman = {
  name: 'Superman',
  power: 'Super strength, super speed, Too OP',
  sayWeakness: function(){
    console.log(`I am ${this.name} and my weakness is Kryptonite`);
  }
}

Superman.sayWeakness();

// Principle 3

// code example for New Binding
function lolSummoner(name, role){
  this.name = name;
  this.role = role;
  this.speak = function(){
    console.log(`Hello, my name is ${this.name}, ${this.role} is my role`);
  }
}

const Ashe = new lolSummoner("Ashe", "ADC");
const Zoe = new lolSummoner("Zoe", "Mid");
Ashe.speak();
Zoe.speak();

// Principle 4

// code example for Explicit Binding
Ashe.speak.apply(Zoe);
Zoe.speak.call(Ashe);
