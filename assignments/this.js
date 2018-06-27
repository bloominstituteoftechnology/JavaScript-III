/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding refers to ${this} in the global context a function is invoked without using other rules like .call(), .apply, .bind(), or dot notation.
* 2. Implicit Binding is when dot notation is used to invoke a function. Whatever is to the right of the dot is the context for ${this} in the function.
* 3. New Binding is when the 'new' keyword is used with a function resulting in a newly constructed object being the function's ${this}.
* 4. Explicit Binding is when .call(), .apply(), or .bind() methods are 'explicitly' passed into a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo() {
    console.log(this.a);
}

let a = 2;

foo(); // should print 2

// Principle 2

// code example for Implicit Binding
let MyObject = function () {
    this.name = 'MyObjectName';
    this.myProperty = 'property';
};

MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
};

let obj = new MyObject();

obj.doStuff('awesome'); // should print 'MyObjectName is awesome!'

// Principle 3

// code example for New Binding
function foo(something) {
    this.a = something;
}

let bar = new foo(somethingElse);
console.log(bar.a); // should print somethingElse

// Principle 4

// code example for Explicit Binding
let runner = {
    name: 'Arthur',
    myFavoriteActivity: 'running'
};

MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);

console.log(runner + ' is ' + runner.myFavoriteActivity + '!'); // should print 'Arthur is running!';