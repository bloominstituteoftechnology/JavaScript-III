/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
The 'this' keyword is bound to the "Window" object by default. "Window" is a global
variable that is representative of the browser window that is affected by the code.

* 2. Implicit Binding
The 'this' keyword is implicitly bound an object when invoking a method results in 
running code that contains it. In this case, 

* 3. New Binding
The 'this' keyword is bound by the "new" keyword when creating an object from a
constructor function. The "this" keyword in this case will be bound to 
the created object.

* 4. Explicit Binding
The 'this' keyword is explicitly bound to the object that is the given argument
in the call, apply, or bind methods.  These methods allow us to bind 'this' to whichever
object we see fit.

. These methods are meant to call 

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

var dessert = {
    flavor: 'Rocky Road',
    food: 'Ice Cream',
    speak: function () {
        console.log(`${this.flavor} is one of the most popular flavors of ${this.food}`)
    }
}
dessert.speak()



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding