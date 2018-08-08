/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global (window) - the default binding whenever "this" is used without a specific call such as dot notation or call(), apply(), and bind(). When in a browser, the global context is the window.
* 2. Implicit binding - when "this" is called with a dot preceding it, it will refer to the object before the dot. One of the most commonly used applications.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(greet) {
  console.log(this);
  return greet;
}
sayName("Hello there!");

// Principle 2

const newObj =   {
  name: "Evan",
  greeting: function(age) {
    console.log("`${this.name} is {age} years old.`");
    console.log(this);
  }
};
newObj.greeting(28);

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
