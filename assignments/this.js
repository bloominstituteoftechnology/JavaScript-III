/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this is the global object of whatever is bound to "THIS". this is the most overall binding. If you use "use strict" within a function, then you can never override it... as you shouldn't!

* 2. Implicit Binding - seen most of the time in people's code. This is when a function is called, it looks to the left of the dot to see what object it should be looking to when it's invoked.

* 3. New Binding - This one is when you use a constructor. A blank blueprint of what an obect should be. it uses the "THIS" keyword. When you create a new object, you base it off the constructor by using this "New" keyword binding

* 4. Explicit binding - this is useful for when you want to run the same function on numerous objects and would like to only write it out once. You can use .call() to invoke it on the object you wish. It is built outside and seperately from the inside of objects which helps with the "DRY" concept.
*
* write out a code example of each explanation above
*/

// Principle 1 - Window Binding
function sayAge(age) {
  console.log(this);
  return age;
}


// Principle 2 - Implicit Binding
const James = {
  name: 'James Wigdor',
  age: 28,
  hair: "brown",
  moreCowBell: function (name) {
    console.log(`${name} is playing MORE COWBELL!!!`);
  }
}

James.moreCowBell("James");

// Principle 3 - New Binding
function Employee (name, position, payGrade) {
  this.name = name,
  this.Position = position,
  this.payGrade = payGrade
}

const me = new Employee("James Wigdor", "Lead Guitarist", 23)


// Principle 4 - Explicit Binding
function evenMoreCowbell() {
  console.log(`We need EVEN MORE COWBELL ${this.name}! Here... use two drumsticks this time`);
}

const james = {
  name: "James",
}

evenMoreCowbell.call(james);

