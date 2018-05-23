/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: In the global scope, the "this" keyword references the window/console object.
* 2. Implicit Binding: The "this" keyword references the object to the left of the dot.
* 3. Explicit Binding: The "this" keyword is explicitly defined when using the .call, .apply, or .bind methods.
* 4. New Binding: When using a constructor function, the "this" keyword will reference the newly created object.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
  console.log(this);
  return name;
}
sayName("Jennifer");

// Principle 2

let personObj = {
  'age': 23,
  'name': 'Jennifer',
  'sayName': function(name) {
    console.log('My name is ' + this.name)
  }
}

personObj.sayName();

// Principle 3

function VideoGame(fun) {
  this.fun = fun;
}

let legendOfZelda = new VideoGame('super fun');
console.log(legendOfZelda.fun);

// Principle 4

let sayFavoriteColor = function() {
  console.log('My favorite color is ' + this.color);
};

let stacey = {
  name: "stacey",
  color: "blue"
};

sayFavoriteColor.call(stacey);
