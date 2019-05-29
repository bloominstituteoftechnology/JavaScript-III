/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log("\nPrinciple 1: code example for Window Binding\n");

function sayMyName(name) {
    console.log(this);
    return name;
  }
  sayMyName("Carl");



// Principle 2
// code example for Implicit Binding

console.log("\n Principle 2: code example for Implicit Binding\n")
const myObj = {
    greeting: 'Hello ',
    sayHello: function(name) {
      console.log(this.greeting + "my name is " + name) ;
      console.log(this);
    }
  };
  
  myObj.sayHello('Slim Shady');



// Principle 3

// code example for New Binding

console.log("\n Principle 3: code example for New Binding\n"); 


function RudeBoy(rudeness) {

    this.RudeGesture = 'Hand signal';
    this.rudeness = rudeness;
    this.yell = function() {

        console.log(this.RudeGesture + this.rudeness);
        console.log(this);
    };

}

const Donald = new RudeBoy('Donald');

Donald.yell();




// Principle 4

// code example for Explicit Binding

console.log("\n Principle 4: code example for Explicit Binding \n");

const Jackie = new RudeBoy('Jackie');

Jackie.yell();

Jackie.yell.call(Donald);