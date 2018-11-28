/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When there is no other scope bound, "this" is bound to the global scope, which is usually the window.
* 2. Implicit Binding: Inside methods, "this" is bound to the scope of the containing object.
* 3. New Binding: Inside constructors, "this" is bound to the scope of the object being created.
* 4. Explicit Binding: call() and apply() are special function methods that allow the scope to be explicitly set to an argument.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this);
console.log("[Above should show information about the execution context, or global scope.]");

// Principle 2

const horn = {
    'size': 'big',
    'color': 'red',
    'sound': 'Honk!',
    logDesc : function() {
        console.log(`The ${this.size} ${this.color} horn goes: ${this.sound}`);
    }
}

horn.logDesc();

// Principle 3

function Horn(hornAttributes) {
    this.size = hornAttributes.size;
    this.color = hornAttributes.color;
    this.sound = hornAttributes.sound;
    this.logDesc = function() {
        console.log(`The ${this.size} ${this.color} horn goes: ${this.sound}`);
    }
}

const horn_b = new Horn({
    'size': 'little',
    'color': 'blue',
    'sound': 'Toot!'
});

horn_b.logDesc();


// Principle 4
function logHornDesc() {
    console.log(`The ${this.size} ${this.color} horn goes: ${this.sound}`);
}

console.log("[Horn desc called normally.]");
logHornDesc();
console.log("[Horn desc with scope set to horn_b.]");
logHornDesc.call(horn_b);