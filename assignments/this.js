/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window- Windows is used when there is nothing else being binded to the keyword, and it looks to the window object as default.
* 2. Implicit- Implicit is when the this keyword is being used for the object that is to the left of the method being called.
* 3. Explicit- Explicit is when you explicitally pass in the object to the function that the this keyword is going to be binded to.
* 4. New- New is when the this keyword is being binded to a new object that is being created using the constructor using the new keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dogType() {
    console.log(`The type of dog is ${this}`);
}
dogType();

// Principle 2

// code example for Implicit Binding
var dog = {
    name: "Fido",
    age: "7",
    speak: function () {
        console.log(`${this.name} barks.`);
    }
}
dog.speak();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding