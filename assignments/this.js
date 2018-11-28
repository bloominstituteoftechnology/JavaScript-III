/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding. This is the default binding if none of the other bindings are in place. In a browser this will be the window.
     If you are in strict mode, this will be undefined.
* 2. Implicit Binding. This is the binding used when invoking a function using dot notation.
     Whatever is left of the dot is what this will bind to.
* 3. New binding. Using the "new" keyword creates a new instance of a function. This will be bound to the newly created function.
* 4. Explicit binding. Using .call .apply or .bind, the binding for this is passed along as the first item in a list of parameters.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(name) {
  // "use strict"
  // Uncomment above line to see failure. Logged this shows global context
  this.name = name;
  console.log(`Hello, ${this.name}.`)
  console.log(this);
}

greeting("Jamie");
console.log(this);




// Principle 2

// code example for Implicit Binding

let testObject = function (){
    this.name = 'Learning JavaScript';
  };
 
  testObject.prototype.doSomething = function (action) {
    console.log(`${this.name} is ${action}!`);
  }
 
  let obj = new testObject();
 
  obj.doSomething('challenging');



// Principle 3

// code example for New Binding

// Log shows this before and after declaration of new Car

console.log(this);
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(this);
  }
 
  let myCar = new Car('Ford', 'Mustang', 1965);
  
// Principle 4

// code example for Explicit Binding

// shows the difference between what this is pointing to when call or apply are used as opposed to just calling a function
let newObj = {a: "someValue"};
let a = "Global";

function whatsThis() {
    return this.a; 
  }
  
  console.log(whatsThis());
  console.log(whatsThis.call(newObj));
  console.log(whatsThis.apply(newObj));