/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window binding means that the this applies to an object with global scope.
* 2. Implicit binding means that the this applies to whatever is to the left of the dot when the function is invoked.
* 3. New binding means that when a new object is created via a function, the this is applied to the new object created by the function.
* 4. Explicit binding uses the .call or .apply method to clearly indicate the context of the this 
*
* write out a code example of each explanation above
*/

// Principle 1: Window Binding
 function saySomething(something) {
    console.log(this);
    return something;
}

saySomething("Wassup Bro");

// Principle 2: Implicit Binding
const greetings = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
    }
  };
  greetings.sayHello('Brosaurus Rex');

// Principle 3: New Binding
function Person(name) {
    this.name = name;
    this.greeting = "Howdy";
    this.howdy = function () {
        console.log(`${this.greeting}, ${this.name}!`);
    }
};

const tramane = new Person("Tramane");
tramane.howdy();

// Principle 4
let bros = [
    {
        name: "Schmitty",
        age: 27
    },
    {
        name: "Gingersnap",
        age: 22
    }];

function wazzzzuuuupppppp(bro) {
    return `${bro.name}! Wazzzzzzuuuuuuupppppppp!`;
}

console.log(wazzzzuuuupppppp.call(this, bros[0]));

