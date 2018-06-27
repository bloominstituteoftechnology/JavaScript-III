/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding -- refers to when 
* 2. Implicit binding -- the "this" keyword refers to whatever is left of the dot when we call our function.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const kyle = {
    name: 'Kyle',
    age: 28,
    hometown: 'Phoenix',
    saysHi: function (){
        console.log(`Hello, my name is ${this.name}`);
    }
}

kyle.saysHi();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding