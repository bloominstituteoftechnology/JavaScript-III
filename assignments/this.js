/* The for principles of "this":
* In your own words, explain the four principles for the "this" keyword below.
*
// 1. Window binding is the default binding and means that 'this' is applied to the window object, unless strict mode is enabled and then it returns undefined.
// 2. Implicit binding is the fact that 'this' is tied to the object immediately to the left of the period when invoked, usually associated with methods.
// 3. Explicit binding is binding through the use of .call, .apply, and .bind methods.  
        .call takes the first argument as context (and therefore applies 'this' to it) and every other argument gets passed as a normal argument.
        .apply is like .call but can parse an array of arguments.
        .bind is like call but returns a new function instead of invoking a function.
// 4. new Binding is when a function is invoked with a new keyword, 'this' binds to that new object.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window binding:
function myFunction (name) {
    return `My name is ${this} because quokka does not have a window name`
}
console.log(myFunction("Amy")) // My name is [object global] because quokka does not have a window name

// Principle 2

// Implicit Binding
myObject = {
    statement: ' is my name now because of implicit binding',
    name: "Amy",
    mySecondFunction: function (name) {
        return `${this.name} ${this.statement}`
    }
}
console.log(myObject.mySecondFunction("Amy")); // Amy is my name now because of implicit binding
// Principle 3

// New Binding
function Cat (name, breed) {
    this.name = name,
    this.breed = breed
};

const robertLazarus = new Cat("Robert Lazarus", "Maine Coon")
console.log(robertLazarus) // Cat {name: 'Robert Lazarus', breed: 'Maine Coon'}

const dylanThomas = new Cat("Dylan Thomas", "Maine Coon")
console.log(dylanThomas) // Cat {name: 'Dylan Thomas', breed: 'Maine Coon'}

// Each cat is able to get a new binding with the 'new' keyword.

// Principle 4
// Explicit Binding
const outside = {
    "help": `Sometimes it's just really hard to understand what's going on`
}
function cryUncle (name) {
    return this.help;
}
console.log(cryUncle.call(outside)) // Sometimes it's just really hard to understand what's going on