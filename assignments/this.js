/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the value of "this" is in the Global Scope Object Displayed in the console
* 2. Implicit Binding: is the object before the preceding dot that calls on a function
* 3. New Binding: JavaScript will create a brand new object for us and save it as this. So when you reference something like a Brand into a variable Nike
* 4. Explicit Binding:  You tell what the `this` statement exactly references.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(){
    console.log(this);
}
hello();

// Principle 2

// code example for Implicit Binding
const person = {
    firstName: 'Scott',
    lastName: 'Beeker',
    sayName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
person.sayName();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding