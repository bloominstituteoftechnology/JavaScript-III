/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If "this" doesn't have an object to bind to, it'll bind to the Window object.
* 2. If you set "this" inside of a created object, that's implicit binding.
* 3. If you use the New keyword to create a new object, then "this" is bound to that New binding. That's New Binding.
* 4. If you use .call, .apply, or .bind, that's explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo () {
    console.log(this.bar);
}

// Principle 2

// code example for Implicit Binding
let meowCat = {
    catType: 'Black Cat',
    pleaseMeow: function(){
        return `The ${this.catType} squints at you and gives a gentle high-pitched meow...`
    },
}

console.log(meowCat.pleaseMeow());


// Principle 3

// code example for New Binding
let newBinding = new foo();

// Principle 4

// code example for Explicit Binding
let bar = 'global';
const obj2 = {
    bar: 'obj2',
}

foo.call(obj2);
