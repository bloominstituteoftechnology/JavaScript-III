/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global scope: this points to the Window/Console
* 2. Implicit Binding: this is when the "this" keyword is invoked within a function. It is equal to the object to the left of the dot.
* 3. New Binding: "this" refers to the specific instance of the object
* 4. Explicit Binding: This is when the "call", "apply", or "bind" method is used
*
* write out a code example of each explanation above
*/

// Principle 1
function testMessage(message) {
    console.log(this);
    return message;
  }
  testMessage("This is a test");

// Principle 2
// code example for Implicit Binding
const testObject = {
    thing: "say a thing",
    SayThing: function () {
        console.log(`I'm going to ${this.thing}`);
    }
}
testObject.SayThing();

// Principle 3
// code example for New Binding
function NewPerson (name, age) {
    this.name = name;
    this.age = age;
    this.speak = function() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}`);
    };
}
const Person1 = new NewPerson("Marc", 32);
Person1.speak();

// Principle 4
// code example for Explicit Binding
const Person = {
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const guy = {
    firstName: "Marc",
    lastName: "Gutnayer"
}

Person.fullName.call(guy);
