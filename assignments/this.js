/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding means 'this' will refer to data in the global scope
* 2. In Implicit binding, 'this' refers to the last preceding object in scope
* 3. In New binding, 'this' refers to the instance of that object
* 4. In Explicit binding, 'this' is assigned with the call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const greeting = 'Hello';
function greet() {
    console.log(this);
    return greeting;
}
// greet();

// Principle 2

// code example for Implicit Binding
const parrotObj = {
    'greeting': 'Hello',
    'greet': function(name) {
        console.log(`${this.greeting}, my name is ${name}`);
    }
};
// parrotObj.greet('Mojo');

// Principle 3

// code example for New Binding
function newParrotObj (attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.gender = attr.gender;
};

const mojo = new newParrotObj({
    'name': 'Mojo',
    'age': 7,
    'gender': 'M'
});
// console.log(mojo.age);

// Principle 4

// code example for Explicit Binding
function BabyParrot(parrotAttr) {
    newParrotObj.call(this, parrotAttr);
    this.isBaby = parrotAttr.isBaby;
}

BabyParrot.prototype = Object.create(newParrotObj.prototype);

const quackers = new BabyParrot({
    'name': 'Quackers',
    'age' : 1,
    'gender': 'M'
});
// console.log(quackers.name);