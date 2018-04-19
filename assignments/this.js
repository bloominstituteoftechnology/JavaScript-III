/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - When in the global scope, the value of "this" will be the window Object.
* 2. Implicit Binding - "this" is the object directly to the left of the dot whenever a function is called.
* 3. new keyword binding - When a function is invoked with the "new" keyword the "this" keyword inside that function is bound to the new object being constructed.
* 4. Explicit binding - This is when you use one of the .call, .apply, or .bind methods that allow us to explicitly say what the "this" keyword is.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let sayAge = function(){
  console.log(this.age);
}
sayAge();

// Principle 2

// code example for Implicit Binding
let marco = {
  'name': 'Marco',
  'age': 54,
  'hometown': 'Los Angeles',
  sayName: function(){
    console.log(this.name);
  },
};

marco.sayName(); //The object marco is directly to the left of the dot and is what 'this' is pointing to for this example.

// Principle 3

// code example for New Binding
let Animal = function(color, name, type){
  this.color = color;
  this.name = name;
  this.type = type;
}

let zebra = new Animal('black and white', 'Zorro', 'Zebra');

// Principle 4

// code example for Explicit Binding
let sayName = function(){
  console.log(`My name is ${this.name}!`);
}

let stacey = {
  'name': 'Stacey',
  'age': 54,
};

sayName.call(stacey); //The 'this' keyword  references stacey because we are explicitly telling it to do so.