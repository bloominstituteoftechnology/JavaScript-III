/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: when this is invoked, it bind (utilizes the attributes of) the Window object.

* 2.  Implicit Binding:  when an object calls a function using dot notation (obj.func()), the function is bound to the named object to the left of the dot.

* 3.  New Binding:  refers to the specific instance of an object that has been created by constructor.

* 4.  Explicit Binding: when methods .call or .apply are used to call an object method, these are explicit binds to the object.
*
* write out a code example of each explanation above
*/

// Principle 1

function greeting(hello) {
  console.log(this);
  return hello;
}

greeting("What's up?");
// code example for Window Binding

// Principle 2

var user = {
  fName: "Prince",
  lName: "Nelson",
  showUser: function(){
    console.log(`User: ${this.fName} ${this.lName}`);
  }
}

user.showUser();

// code example for Implicit Binding

// Principle 3

function Dog(name) {
  this.name = name;
  this.speak = function(){
    console.log(`${this.name} says Woof!`);
  }
}

var fido = new Dog("Fido");
fido.speak();


// code example for New Binding

// Principle 4

fido.speak.call(Dog);

// code example for Explicit Binding
