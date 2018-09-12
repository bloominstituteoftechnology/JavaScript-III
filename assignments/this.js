/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - if "this" is used while in global scope, it will bind to the window object;
* 2. Implicit Binding -used when referring to a property within an object, the word this followed by .
* 3. New binding - used when creating an object constructor. When the constructor is used to create a specific instance 
the format of a new binding tells the parameters to attach in the new object being created from the constructor
* 4. Explicit binding -
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello(greeting) {
    console.log(this);
    return greeting;
  }
 sayHello("howdy!");

// Principle 2

// code example for Implicit Binding
const newObj = {
    foodOrder: 'french fries',
    confirmOrder: function(name) {
      console.log(`${name}, your order of ${this.foodOrder} will be out soon`);
      console.log(this);
    }
  };
  newObj.confirmOrder('Katie');

// Principle 3

// code example for New Binding

function FoodOrder(name,order) {
     this.name = name;
     this.order = order;
     this.confirmation = `Hello ${this.name}, your ${this.order} will be right out`;
     this.speak = function() {
      console.log(this.confirmation);
      console.log(this);
    };
  }
  
  const katie = new FoodOrder('Katie', 'french fries');
 
  katie.speak();

// Principle 4

// code example for Explicit Binding