/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when you are binding outside of any scope that would bind to the most global object aka The window
* 2. Implicit Binding is when you look to the left of the dot in the function is invoked.
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example(i) {
    this.i = "Ball"
    console.log(this.i)
}

example();



// Principle 2

// code example for Implicit Binding

const Justin = {
    name : "Justin",
    age : "26",
    gender : "M",
    
    eats : function(name) {
        console.log(`${this.name} scoffs down their meal`);
    }
}

Justin.eats()



// Principle 3

// code example for New Binding


// Principle 4

// code example for Explicit Binding