/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

All these principles only take effect once the function has been called or invoked. 

* 1. The Global/ Window Binding principle occurs when this references to the window object where JavaScript is run.
* 2. The Implicit Binding principle occurs when this references whatever object is to the left of the dot or function invoked.
* 3. The New Binding principle occurs when this references the new object that was constructed and bound to it following the invocation of the new object by the function. 
* 4. The Explicit Binding principle occurs when a function is invoked and that function uses this to reference the object in question that outside its scope.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(greeting) {
    console.log(this);
    return greeting;
}
sayHello("Hello, how are you?");

// Principle 2

// code example for Implicit Binding

const person = {
    name: 'Marc',
    age: 45,
    greeting: 'Hello, my name is Marc!',
    sayGreeting: function() {
        console.log(this.greeting);
    }
};

person.sayGreeting();

// Principle 3

// code example for New Binding

var Human = function(name, age, eyeColor) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
};

var boy = new Human('Marc', 32, 'brown');
console.log(boy);

// Principle 4

// code example for Explicit Binding

const sayName = function() {
    console.log('My name is ' + this.name);
};

const me = {
    name: 'Marc',
    age: 45,
};

sayName.apply(me);