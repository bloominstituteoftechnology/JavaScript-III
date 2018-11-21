/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit binding is when the refrence to the 'this' key word that sits inside a method of an object
 * is automatically assigned to the name of the object that it's being invoked on.
 *
 *
 * 2. Explicit binding is when you must assign a refrence to the 'this' key word by using .apply, .call, or .bind
 * to point at what 'this' should means.
 *
 * 3. New binding is when you use a constructor function to creat a new object that recieves all the
 * properties (and refrence to 'this') of the constructor itself.
 *
 * 4. Window binding happens when none of the other three binding methods are met. The 'this' key word then looks to
 * window object for refrence.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const becky = {
  name: "Becky",
  age: 56,
  gender: "Female",

  talk: function() {
    console.log(`My name is, ${this.name}`);
  }
};

// talks();

// Principle 2

// code example for Implicit Binding
const spencer = {
  name: "Spencer",
  age: 28,
  gender: "Male",

  blab: function() {
    console.log(`My name is, ${this.name}`);
  }
};

spencer.blab();
// Principle 3

// code example for New Binding
function Hero(name, power, city) {
  this.name = name;
  this.power = power;
  this.city = city;

  this.action = (name, city, power) => {
    console.log(
      `My name is ${this.name} and i'm saving ${
        this.city
      } from crime, with my ${this.power}`
    );
  };
}

const Batman = new Hero("Batman", "Money", "Gothom");

Batman.action();

// Principle 4

// code example for Explicit Binding
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const larry = new Person("Larry", 25, "Male");

const brad = {
  name: "Brad",
  age: 45
};

function intro() {
  console.log(`My name is, ${this.name} and i am ${this.age} `);
}

intro.call(larry);

intro.apply(brad);

const talks = intro.bind(larry);
talks();
