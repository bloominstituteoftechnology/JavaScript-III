/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: this refers to this object to the left of the dot where it is invoked
* 2. Explicit binding: this refers to the function that is passed into using .call .apply or .bind 
* 3. new binding: this refers to the function that was invoked using the new keyword
* 4. Window binding: If none of the other 3 rules apply, this refers to the global window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var name = this.name;

// Principle 2

// code example for Implicit Binding
var me = {
  name: "Tyler",
  age: 25,
  sayName: function() {
    console.log(this.name);
  }
};
me.sayName();

// Principle 3

// code example for New Binding

var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal("black and white", "Zorro", "Zebra");

// Principle 4

// code example for Explicit Binding

const personInfo = {
  name: "Bob"
};

const skills = ["HTML", "CSS", "JS"];

function introduce(name, skill1, skill2, skill3) {
  console.log(
    `Hello!  My name is: ${
      this.name
    } and I like to program in: ${skill1}, ${skill2}, ${skill3}`
  );
}

introduce.call(personInfo, skills);
