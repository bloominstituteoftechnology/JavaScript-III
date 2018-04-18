/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - "this" pointer isnt pointing towards anuthing so it defults to a global scope/window object

* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is "this"

* 3. New binding - Refers to the specific instance of the object that is created and returned by the constructor function

* 4. Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greeting){
    console.log(this);
    return greeting;
}

sayHello("Hello");
// Principle 2

// code example for Implicit Binding
const obj = {
    name: 'Max',
    greet: function(greeting){
        console.log(`${greeting} my name is ${this.name}`);
        console.log(this);
    }
}
console.log(obj.greet("Hi"));

// Principle 3

// code example for New Binding

function Doge(name){
    this.type = "Hi I doge";
    this.name = name;
    this.talk = function() {
        console.log(this.type +" "+ this.name);
        console.log(this);
    };

}

const belle = new Doge('Belle');
const fugee = new Doge('Fugee');

console.log(belle.talk())
  
// Principle 4

// code example for Explicit Binding

console.log(belle.talk.call(fugee))
console.log(fugee.talk.apply(belle))
