/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window , or Global Binding bind the .this keyword to whatever object is on the global scope.

* 2. Implicit Binding is the most commonly used binding technique for .this, and it ties .this to whatever
     object is to the immediate left of a . 

* 3. New Binding is used when we have a constructor function, and since a constructor can be used to make 
     multiple objects, we can use "new" to make new objects easily that inheret the properties for .this

* 4. With Explicit Binding, we can use .call, .apply, and .bind to assign values to .this
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let me = "Andrew";

function sayName(name) {
    return name;
};

console.log(sayName(me));

// Principle 2

// code example for Implicit Binding

const jerkStore = {
  setup: 'The Jerk Store ',
  person: function(jerk) {
    console.log(`${this.setup} is out of ${jerk}`);
  }
};
jerkStore.person('George Costanza');

// Principle 3

// code example for New Binding

let bestFriend = 'Elaine';

let Friend = {
    
}

// Principle 4

// code example for Explicit Binding