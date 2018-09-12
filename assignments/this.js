/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit - This applies to whatever is directly to the left of the .
* 2. Explicit - This is used with the call, apply, and bind methods 
* 3. New Binding - used in constructor functions
* 4. Window Binding - if none of the above are used, this defaults to the window object
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this.age = 35;
// The window object is given an "age" property and assigned to it '35'


// Principle 2
// code example for Implicit Binding
someObject.this;
// this binds to someObject


// Principle 3
// code example for New Binding
const Person = function(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = wwight;
};

let mike = new Person('Mike', 35, 170); 


// Principle 4

// code example for Explicit Binding
const sayName = function(){
    console.log(`My name is ${this.name}`);
}

var mike = {
    name: "Mike",
    age: 35
};

sayName.call(mike);