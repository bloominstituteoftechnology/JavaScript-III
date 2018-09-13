/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - when in global scope, then context of "this" is the window object, or the console. 

* 2. implicit binding- when an object calls a method in the form object.method(paramater), the context of "this" is the element that directly called the method. In other words, the object directly to the left of the decimal before the method. 

* 3. New binding - when a new object is created using a constructor function, "this" is in the context of the actual object created. Not to be confused with the constructor function itself. The new binding isn't created until after the constructor function is called.

* 4. explicit binding - when a function is called with an argument that tells it the context in which to call it, using .call or .apply


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function getGlobal() {
    console.log(this);
}

getGlobal();

// Principle 2

// code example for Implicit Binding
const myMeat = {
    meat: "steak",
    grill: function(temperature) {
        console.log(`I'd like my ${this.meat} cooked ${temperature}`)
    }
}
/// the context of the grill function is the myMeat object
myMeat.grill("medium rare");

// Principle 3

// code example for New Binding

/// this is the constructor
function Guitar(color, brand) {
    this.color= color;
    this.brand= brand;
}
/// this is the New Binding 
const maybellene = new Guitar("red", "Gibson")

// Principle 4

// code example for Explicit Binding

function destroy() {
    let whatHappened = [this.name, "was completely destroyed!!!!"].join(' ');
    console.log(whatHappened);
}

let thing = {
    name: "Hamburger"
}
///explicit binding
destroy.call(thing);