/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: "this" points to the global scope
* 2. Implicit Binding: "this" now points to the object to the left of the dot where the function was invoked
* 3. Explicit Binding: "this" is told what object to point to using .call, .bind and .apply
* 4. New Binding: a new object was made using the new keyword and "this" points to this new object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding() {
    console.log(this);
}
 windowBinding();

// Principle 2

// code example for Implicit Binding

const example = {
    status: "testing",
    number: 1,
    implicitBinding: function(){
        console.log(`We are currently ${this.status}!`);
    }
}

example.implicitBinding();

// Principle 3

// code example for New Binding

function NewExample(element) {
    this.element = element;
    this.statement = function(){
        console.log(`I'm just here to state what you wrote: ${element}`);
    }
}

example2 = new NewExample("turnips");

example2.statement();

// Principle 4

// code example for Explicit Binding

const newStatus = "finished";

function explicitBinding(changedStatus) {
    console.log(`I hope we're done with ${this.status}, so that we can be ${changedStatus}!`);
}

explicitBinding.call(example, newStatus);