/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding; Which pretty much refers to the main window, or 'global scope'.
* 2. Implicit Binding; When a function is called 'this.example', this would be the 'Object' and 'example' would be the 'function'. 
* 3. New Binding; Which refers to the creation of a 'new' object within a constructor function.
* 4. Explicit binding; Which refers to when an apply() or call() method is used, 'this' us explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function greeting(name) {
    console.log(`Hello ${this}`);
    return greeting;
}

greeting('Justin');


// Principle 2

const helloWorldFunction = () => {
    helloWorldFunction.message = function() {
        console.log(`Hello ${this.message}`);
        console.log(this);
    };
};

const Justin = 'Justin';
const Kyran = 'Kyran';

helloWorldFunction(Kyran);
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding