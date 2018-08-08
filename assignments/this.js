/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding; "This" is always refered to the window it is used for. So If this does not extend anything it will refer to the window. Or it will be undefined.
* 2. New Binding; New is used to create new objects quickly from constructors 
* 3. Implicit Binding: The "This" of an object's method is pointed to the object that is calling it. myObj.cook's "This" would refer to myObj. 
* 4. Explicit Binding; This is used when we are using call to conect a function's "this" from a variable from another object source.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//this refers to the window, we should run into an error
function incrementor(n) {
    console.log(n + this.num);
}
incrementor();
//if we introduced let num = 1 however, the this would not refer to the window, but to the value of 1

// Principle 2

// code example for Implicit Binding

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2

// Principle 3

// code example for New Binding

// Constructor
function Person(name) {
    this.greeting = "Hello, I'm ";
    this.name = name;
    this.speak = function() {
        console.log(`${this.greeting}${this.name}`);
    }
}

const wonjae = new Person('Wonjae');
const minji = new Person('Minji');

wonjae.speak();
minji.speak();



// Principle 4

// code example for Explicit Binding

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var obj2 = {
    a: 5
}

foo.call( obj ); // 2
foo.call( obj2 ); // 5