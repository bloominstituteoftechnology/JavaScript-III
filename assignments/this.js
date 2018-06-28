/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Default binding. Bound to window or global object. Binds to undefined in strict mode.
* 2.Implicit binding. When no other binding is provided, the value of this is inferred from the
  calling context.
* 3.Explicit binding with the help of call, bind or apply.
* 4.new keyword binding. Bound to a newly created object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let obj = {
  _value: 1,
  get value() {
    return this._value;
  }
};
console.log(obj.value);

// Principle 3

// code example for New Binding
function Person(fName, lName) {
  console.log(this);
  this.firstName = fName;
  this.lastName = lName;
}
let newPerson = new Person('John', 'Doe');

// Principle 4

// code example for Explicit Binding
function printThis() {
  console.log(this);
}
printThis.call(newPerson);
printThis.call(obj);
