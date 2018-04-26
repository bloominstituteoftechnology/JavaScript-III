/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. new Binding
* 4. Window Binding
*
* Write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let getAge = function() {
  console.log(this.age);
};

let myAge = {
  age: 24
}

window.age = myAge.age;
getAge();

// Principle 2

// code example for Implicit Binding

let createMethod = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  };
};

let myself = {
  name: 'Eddy',
  age: 24
}

let disguise = {
  name: 'Mr.Robot',
  age: 42
}

createMethod(myself);
createMethod(disguise);

myself.sayName();
disguise.sayName();

// Principle 3

// code example for New Binding

let Profile = function(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.location = attributes.location;
}

let eddy = new Profile({
  name: 'Eddy',
  age: 24,
  location: 'NY'
});

eddy.name;
eddy.age;
eddy.location;

// Principle 4

// code example for Explicit Binding

let sayName = function(lang1, lang2, lang3) {
  console.log(`Hello, my name is ${this.name} and I know how to code in ${lang1}, ${lang2} and ${lang3}.`);
};

let me = {
  name: 'Eddy',
  age: 24
}

let langs = ['HTML', 'CSS', 'JavaScript'];

// sayName.call(me, langs[0], langs[1], langs[2]);
// sayName.apply(me, langs);

let newFunc = sayName.bind(me, ...langs);

newFunc();
