/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this refers to window by default and will if not redirected
* 2. this references the tag to the left of the . that precedes the function name.
* 3. the new keyword creates a new object and saves it as "this", used in constructors
* 4. using .call() or .apply(), this takes the context from the ().
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName() {
  console.log(this.name);
}
sayName();

// Principle 2

var me = {
  name: 'Josh',
  age: 21,
  sayName: function() {
    console.log(this.name);
  }
}

me.sayName();

// Principle 3

const Person = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let josh = new Person('Josh', 21, 'M')

josh

// Principle 4

function sayName() {
  console.log(this.name);
}

var me = {
  name: 'Josh',
  age: 21,
}

sayName.call(me);
