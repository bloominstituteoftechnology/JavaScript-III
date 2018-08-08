/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in global scope, the "this" keyword will reference the window or console you are in.
* 2. In impicit binding, the "this" keyword wil reference the object before the dot upon which the method is invoked.
* 3. When creating a new object via a constructor function, the "this" keyword will reference the specific object that is created.
* 4. When you are using the methods call or apply, you are using explicit binding. So when an object calls on another object, the "this" keyword will reference the calling object making the call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function principle1() {
    return this;
}
console.log(principle1());

// Principle 2

// code example for Implicit Binding
const principle2 = {
    "greeting": "Hello",
    "sayHello": function(myName) {
        return `${this.greeting}, my name is ${myName}.`;
    }
};
console.log(principle2.sayHello("Alice"));

// Principle 3

// code example for New Binding
function Person(attributes) { // base constructor function
    this.greeting = attributes.myGreeting;
    this.name = attributes.myName;
}
Person.prototype.sayHello = function() { // methods
    return `${this.greeting}, I am ${this.name}.`
};

const bob = new Person({
    myGreeting: "Hello",
    myName: "Bob"
});
const charles = new Person({
    myGreeting: "Hi",
    myName: "Charles"
});

console.log(bob.sayHello());
console.log(charles.sayHello());

// Principle 4

// code example for Explicit Binding
function Parent(attributes) {
    this.name = attributes.name;
}

function Child(childAttributes) {
    Parent.call(this, childAttributes);
    this.age = childAttributes.age;
}

Child.prototype.speak = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const david = new Child({
    "name": "David",
    "age": 18
});

const ellen = new Child({
    "name": "Ellen",
    "age": 30
});

console.log(david.speak());
console.log(ellen.speak());