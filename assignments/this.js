/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding = this is automatic, this will happen no matter what, it's simple/direct
* 2. Explicit = 
* 3. Window = trys to this keyord from window, not useable
* 4. New = Takes a function call and binds it to a new function
*
* write out a code example of each explanation above
*/

// Principle 1 for Window Binding

this.name = 'David';

function sayHello(name) {
    console.log('Hello my name is + thisname' )
}



// Principle 2 for Implicit Binding
var david = {
    'name': 'David',
    'age': 40,
    'car': 'Mountaineer',
    sayHello: function() {
        console.log (this.name);
    } 
}
david.sayHello();

// Principle 3 for New Binding

let newFunction = sayFavorites.bind(oneObject, fun[1], fun[2],
    fun[3]);
    newFunction();


// Principle 4 for Explicit Binding

const oneObject = {
    'name': 'Sven',
    'age': 23,
    'location': 'Oslo'
}

const fun = ['Beach', 'Skydiving', 'ScubaDiving'];

function sayFavorites(fun1, fun2, fun3) {
    console.log(`My name is ${this.name} and I love the ${fun1}, 
    ${fun2}, ${fun3}.`);
}

sayFavorites.call(oneObject, ...fun);





