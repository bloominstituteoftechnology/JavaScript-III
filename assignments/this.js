/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window/global binding is the default binding of 'this' IF 'this' is not binded to any object/variable
* 2. Implicit binding describes an automatic binding to an object. In most cases, occurs when 'this' followed by a dot operator.
* 3. Explicit binding uses binding commands such as .call() and .apply() to assign 'this' to an object.
* 4. new command is a constructor function that creates objects that 'this' is tied to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function example(){
  console.log(this);
}
example();
// Principle 2

// code example for Implicit Binding
const exampleI = {
  name: "implicit",
  shout: function(){
    console.log(`I am ${this.name}`);
  }
}
exampleI.shout();
// Principle 3

// code example for New Binding
function  NewBind(name) {
  this.name= name;
  this.age= "5s";
  this.calling = function(){
    console.log(`${this.name} and I have been alive for ${this.age}`)
  };
}

const better = new NewBind('name2');

console.log(better);
better.calling();

// Principle 4

// code example for Explicit Binding
const message = {
  phrase: 'cannot reach this'
}

const array = ['one', 'two', 'three'];

function exampleE(array1, array2, array3){
  console.log(`message: ${this.phrase}, count: ${array}`)
}
exampleE();//this.phrase not read because at that instant, this is binded to exampleE, whre there is no phrase

exampleE.call(message);
