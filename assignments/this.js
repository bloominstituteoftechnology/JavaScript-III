/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' is always pointing to window unless otherwise bound
* 2. implicit binding is when we specify an object to bind 'this' to by using the . to invoke method
* 3. "new" binding allows us to bind 'this' to a constructor when we store it in a variable
* 4. Explicit binding is when we directly link 'this' to the object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const winBind = {
    name: "Window Bind",
        
    speak: console.log(`This is an example of ${this.name}`)
}
winBind.speak;

// Principle 2

// code example for Implicit Binding
const impBind = {
    name: "Implicit Bind",
    speak: function () {
        console.log(`This is an example of ${this.name}`);
    }
}
impBind.speak();

// Principle 3

// code example for New Binding
function bindingThis(passedName) {
    this.name = passedName;
    this.speak = function() {
        console.log(`This is an example of ${this.name}`);
    }
}

const newBind = new bindingThis('New Bind');
newBind.speak();


// Principle 4

// code example for Explicit Binding
const expBind = {
    name: "Explicit Bind",    
}

function bindCall () {
    console.log(`This is an example of ${this.name}`);
}

const calling = bindCall.bind(expBind);
calling();