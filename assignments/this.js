/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding occurs when you call the this keyword on the global scope. Because nothing specific is being referenced, the this will grab whatever information it can take from the coding environment.
* 2. Implicit binding occurs within an object when a method references an attribute of the object in which both are contained.
* 3. New binding occurs when a constructor function designates the attributes for all objects it will create.
* 4. Explicit binding occurs when a function method is used to reference the attributes of an object for use within the function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)


// Principle 2
// code example for Implicit Binding
const cat = {
    'ears': 2,
    'tail': 1,
    'legs': 4,
    speak: function(){console.log(`I have ${this.legs} legs`)}
}

cat.speak()
// Principle 3
// code example for New Binding
function Constructor(name){
    this.name = name;
    this.sidekick = 'New keyword'
}

const anObj = new Constructor('an object');
console.log(anObj.name)

// Principle 4
// code example for Explicit Binding

const authors = ['Ray Bradbury', 'Philip K. Dick', 'David Wong']

const reader = {
    'name': 'Joseph P. Bookworm'
}

function libraryEvent(author1, author2, author3){
    console.log(`${this.name} is reading ${author1}, ${author2}, and ${author3}.`)
}

libraryEvent.call(reader, ...authors)