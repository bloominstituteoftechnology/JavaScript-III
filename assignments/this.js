/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. Window Binding is when the keyword this is invoked & this cannot find what to point to, so the this keyword's default behavior is to point to the global window object which represents the browswers window. All global JavaScript objects, functions, and variables automatically become members of the window object.

* 2.  Implicit Binding is when the this keyword points to whatever is to the left of the dot when the method is being invoked.

* 3. New Binding happens when we bind what the keyword this points to when we build a new object from a constructor we created using the new keyword declaring that the new object we are building is inheriting everything including what the this keyword points to from the consturctor.

* 4. Explicit Binding is when we manually tell the this keyword what to  bind to by using the following methods of :  .call .apply .bind

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const me = (name) => {
  console.log(this)
}
// Principle 2

// code example for Implicit Binding
let human = {
  name: 'man',
  age: 50,
  talk: function () {
    return ` Hello I am ${this.name} bruh`
  }
}
console.log(human.talk())

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
