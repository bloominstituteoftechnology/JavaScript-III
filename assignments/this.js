/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
* 2.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1
windows binding. when there is nothing to point to. this will always point at windows(console) global object.
// code example for Window Binding
function myName(name) {
  console.log(this);
  return name
}
myName("Bao");
// Principle 2
Implicit binding is when a function is called by a preceding dot. the object before the dot is 'this';
// code example for Implicit Binding
  const myObjImplicit = {
    greeting: "Yabbadabadoooo!"
    greetFunc: function(name) {
      console.log(`${this.greeting} my nae is ${name}`)
      console.log(this)
    }
  }

  myObjImplicit("BamBam");
// Principle 3
New binding is when to using a constructor function and this will refers to spefiic instance of the obj.
that created and returned by constructor func.
// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}
// Principle 4
  Explicit binding is when using .call() or .apply() method.
// code example for Explicit Binding
bao.speak.call(Larry);
larry.speak.apply(bao);
