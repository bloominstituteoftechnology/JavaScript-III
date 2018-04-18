/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when the keyword 'this' is not bound to anything.  'this' is bound to the window

* 2. Implicit Binding - when an object's method is invoked via dot OR bracket notation, 
        the 'this' keyword is bound to the object that it was called from

* 3. New (as in new Constructor) Binding - when a new Constructor is created, 
        the 'this' keyword is bound the the newly created object.

* 4. Explicit Binding - 
        call() - when an object's method is called using using call(),
            the 'this' keyword is bound to the array inside the ().
        apply() - same as call, but the second parameter (has to be an array) 
                passed in the () will be parsed out
        bind() - same as call(), but the function is returned instead of invoked
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
// window.name = 'chrome'
// function x () {
//     console.log(this.name)
// }

// Principle 2
// code example for Implicit Binding
let derrick = {
    name: 'Derrick',
    age: 30,
    greet: function () {console.log(`${this.name} says hi!`)
    }
}
derrick.greet(derrick);


// Principle 3
// code example for New Binding
function BabyMaker (baby) {
    this.name = baby;
    this.cry = function(){
        console.log(`${this.name} is crying, please take him away`)
    }
}

let mikeBaby = new BabyMaker('Mike');

mikeBaby.cry();

// Principle 4
// code example for Explicit Binding
let person = {
    name: 'Cindy',
    age: '31'
}

let marriageReady = function () {
    console.log(`My name is ${this.name}, I am ${this.age} years old and I am ready to get married!`)
}

marriageReady.call(person);