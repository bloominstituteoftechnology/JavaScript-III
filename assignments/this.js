/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: used when dot notation is used to invoke a function.
* 2. Explicit binding: used when .call() (used for comma separated values),
     .apply() (used for arrays), or .bind() (creates a new function) are used on a function.
* 3. Window binding: refers to the window/console object when in the global scope
* 4. New binding: used in constructors and refers to the specific object that is 
     created and returned by the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySomething() {
    console.log(this)
}

// or

setTimeout( function() {console.log(this)}, 1000)

// Principle 2

// code example for Implicit Binding
const MyObject = function () {
    this.name = 'MyObjectName';
    this.attribute = 'attribute';
};

MyObject.prototype.doSomething = function (something) {
    console.log(this.name + ' is ' + something + '!');
}

const obj = new MyObject();

obj.doSomething('epic');

// Principle 3

// code example for New Binding

function RunningPerson(runner) {
    this.pace = 'is running a 6 min/mile.';
    this.runner = runner;
    this.speak = function() {
        console.log(this.runner + this.pace);
        console.log(this);
    }
}

const john = new RunningPerson('John');
john.speak();

// Principle 4

// code example for Explicit Binding
const coder = {name: 'John', myFavoriteActivity: 'coding'};
MyObject.prototype.doSomething.call(coder, coder.myFavoriteActivity);