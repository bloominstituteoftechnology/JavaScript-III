/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In a regular function (or if you're not in a function at all), this points to window. This is the default case.

* 2. When a function is called as a method, this points to the object that's on the left side of the dot.

* 3. In a function that's being called as a constructor, this points to the object that the constructor is creating.

* 4. When you explicitly set the value of this manually using bind, apply, or call, it's all up to you.
*
* write out a code example of each explanation above
*/

// Principle 1
function logThis() {
  console.log(this);
}

logThis(); // window

// code example for Window Binding

// Principle 2
var myObj = {
  myMethod: function() {
    console.log(this);
  }
};
 
myObj.myMethod(); // myObj

// code example for Implicit Binding

// Principle 3
function Person(name) {
  this.name = name;
}

var eralp = new Person('Eralp');
console.log(eralp); // {name: 'Eralp'}

// code example for New Binding

// Principle 4
function logThis() {
  console.log(this);
}

var explicitlySetLogThis = logThis.bind({name: 'Eralp'});

explicitlySetLogThis(); // {name: 'Eralp'}

// code example for Explicit Binding