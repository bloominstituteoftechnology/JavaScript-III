/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If there is no parent to bind to, `this` binds to window, which is the parent containing all code.
* 2. Implicit binding is done inside the constructor.
* 3. New binding is when `this` is bound to a constructor function, outside of the constructor, using `new constructorName`
* 4. Explicit binding is when binding is explicitly called using .bind(), .apply(), or .call()
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);  // Refers to window

// Principle 2
// code example for Implicit Binding
const person = {
    firstName: 'Jen',
    lastName: 'King',
    age: '41',
    saySomething: function(words) {
        console.log(`${this.firstName} says, '${words}'`);
    }
};
person.saySomething('something else');

// Principle 3
// code example for New Binding
function Person(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greet = function() {
        console.log(`Hi! My name is ${this.firstName} and I am ${this.age} years old.`);
    };
}

const Scooby = new Person( 'Scooby', 'Doo', '7' );
Scooby.greet();

// Principle 4
// code example for Explicit Binding
function Bus(attrs) {
    Person.call(this, attrs);
    this.busName = attrs.busName;
}