/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The most general, referring to the global scope, referring to the windows as the object.
* 2. This refers to the object that comes right before it, seperated by a period.
* 3. New binding refers to a specific instance or version of an object. This is due to there potentially a few versions of this object existing.
* 4. Whenever the call or apply method is used, the binding is explicitly defined meaning you only want this context to apply() or call().
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
 printMe = function() {
     console.log(this);
 }
 printMe();


// Principle 2
// code example for Implicit Binding
let me = {
    'name': 'Arek',
    'age': 25,
    sayName: function() {
        console.log(this.name);
    }
};
me.sayName();

// Principle 3
// code example for New Binding
let Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

let tiger = new Animal('orange and black', 'Lara', 'Tiger');


// Principle 4
// code example for Explicit Binding
let sayName = function() {
    console.log(`My name is ${this.name}`)
};

let stacey = {
    'name': 'Stacey',
    'age': 34,
};

sayName.call(stacey);