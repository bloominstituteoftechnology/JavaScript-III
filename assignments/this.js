/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Global Object Binding

    If the scope of 'this' is left unspecified, the default scope will be global and the default value of 'this' will be the window/console Object. 

* 2. Implicit Binding

    If you create or work with an object with functions, and then proceed to call that function using dot notation, 'this' is the object the precedes the dot and function call. 

* 3. New binding

    This principle comes up once we are working with objects created by constructor functions. When an object is made using a constructor function, and we call that object using dot notation, the 'this' key word refers to the specific instance of the object created using our constructor, NOT the constructor itself. 

* 4. Explicit binding

    Explicit binding occurs whenever we use the call or apply method. When we use either of these keywords, 'this' is set to the object passed in as an argument to call or apply. 


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function sayHello(hello){
//     console.log(this);
//     return hello;
// }

// sayHello("Hello");

// Principle 2

// code example for Implicit Binding

// const newObj = {
//     word: 'Hello',
//     speak: function(input) {
//         console.log(`${this.word}, ${input}.`);
//         console.log(this);
//     }
// };

// newObj.speak('World');

// Principle 3

// code example for New Binding

// function Dancer(name) {
//     this.question = "Would you like to dance"
//     this.name = name;
//     this.ask = function(partner) {
//         console.log(`I, ${this.name}, want to ask, "${this.question}," ${partner} ?`);
//     };
// }

// const John = new Dancer('John');
// John.ask("Jane");


// Principle 4

// code example for Explicit Binding

// function Dancer(name) {
//     this.question = "Would you like to dance"
//     this.name = name;
//     this.ask = function(partner) {
//         console.log(`I, ${this.name}, want to ask, "${this.question}," ${partner} ?`);
//     };
// }

// const John = new Dancer('John');
// John.ask("Jane");

// const Jane = new Dancer('Jane');
// John.ask.call(Jane, "Mary");