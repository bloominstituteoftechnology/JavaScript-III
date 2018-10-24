/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. `this` is bound by default to the window object in the global scope. This is window binding. Also referred to as global binding.
* 2. Implicit binding is a default behavior that applies to the block scope use of `this` when dot notation is used  to call a method on an object, and refers to the value to the left of the dot.
* 3. Explicit binding is when you verbosely declare via call apply or bind what `this` is.
* 4. A New binding occurs when a constructor is used to create an object, in which case, `this` refers to the new object created when invoking a class constructor function to create a new object from the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
name = 'global/window'
globalVar = {
    'name': 'Some Object' 
};
function windowScope() {
    console.log(`Hello, I am ${this.globalVar.name}, these are my contents ${this.globalVar}, and I belong to the ${this.name}! I am also accessible through global.globalVar in node, or window.globalVar in your browser. 'this' in the context used here does not refer to the function, but to the function parent, because 'this' is used in the lexical context of window/global, since the function that called this information is in the global/window environment`)
};
windowScope();

// Principle 2

// code example for Implicit Binding

const lexicalContext = {
    'name': 'Another Object',
    'stats': function() {
       console.log(`Hello, I am ${this.name}, and these are my contents ${this}, I may seem like cousin ${globalVar}, but my use of 'this' refers to myself because of being contained within the confines of a lexical context within an object, in short 'this' references the parent of the lexical environment from which 'this' is within`);
        let that = this
        return function() {
            console.log(`${this} is not the parent object anymore. Here 'this' is rather global/window. This behavior is due to being called without context in regards to the parent object. The context is no longer within the object, but within the function that called this function. Due to this, the implicit context no longer applies, and we revert back to the original behavior of 'this'. One way to alleviate 'this' misbehavior is using a closure such as ${that}, where 'that' is a pointer to 'this' as defined in the outer scope`)
        };
    }
}
lexicalContext.stats()();

// Principle 3

// code example for New Binding
const Constructor = function(name, favoriteSoup) {
    this.name = name;
    this.favoriteSoup = favoriteSoup;
    this.methodSpeak = function() {
        if (this.name === "Jason") {
        console.log(`Here I am, my name is ${this.name}, and 'this' applies to my specific instance as it is bound when instantiated with the 'new' keyword. I am ${this} not: \n ${this.constructor.name}. \n My favorite soup is ${this.favoriteSoup}`);
        } else {
            console.log(`My name is ${this.name}, and I am also under the rules of new 'this' binding. I also am not: \n ${this.constructor.name}, but rather my own self ${this}. \n My favorite soup is ${this.favoriteSoup}`);
        }
    };
}
const constructedJason = new Constructor("Jason", "Broccoli Cheddar");
const constructedPerson = new Constructor("Random", "Gumbo");
constructedJason.methodSpeak();
constructedPerson.methodSpeak();

// Principle 4

// code example for Explicit Binding

const functionSpeak = function(differingParams) {
    console.log(`${differingParams} ${this.name}`)
}

functionSpeak("'this' is");
functionSpeak.call(constructedJason, "However, 'this' is")