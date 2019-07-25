/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.Window binding-a way to insure consistancy with in envoraments
 * 2.implicit-referfes to the let of the do when invoking a fuction
 * 3.New binding-allows you to add a new object inside of a constructer
 * 4.explicit-Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1
function mine() {
  console.log(this);
}
mine();
// code example for Window Binding

// Principle 2
let person = {
  name: "brian",
  speak: function() {
    console.log(`My name is ${this.name}`);
  }
};
person.speak();
// code example for Implicit Binding

// Principle 3
// code example for New Binding
function Car(model, make) {
  this.model = model;
  this.make = make;
}

new Car("Prius");

// Principle 4
// code example for Explicit Binding
mine.call(new Car());
