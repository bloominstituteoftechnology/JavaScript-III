/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of 'This' in the window/global binding will be the window/console object
* 2. Implicit binding occurs when dot notation is used to invoke a function
* 3. When there is a constructor function is used, this refers to specific instance of the object that has been created and returned by the constructor function.
* 4. When the call or apply method is used this is defined
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
}
sayName('Jim Morrison');
// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'You smell',
    saySmell: function(name){
        console.log(`${this.greeting} my name is ${name}`);
    }
};
myObj.saySmell('Jim');
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding