/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is to the actual global window.
* 2. Implicit is the binding to the left of the dot in dot notation.
* 3. Explicit binding is explicitly calling the keyword with .bind(), .call(), and .apply().
* 4. New is the binding for contructor functions.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myFunction = () => {
  return this;
};

let windowBinding = myFunction();

console.log(windowBinding);

// Principle 2

// code example for Implicit Binding
let implicitBinding = {
  firstName: 'Derek',
  lastName: 'Jones',
  sayName: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
  }
}

implicitBinding.sayName();

// Principle 3

// code example for New Binding
const sayName = (name1, name2, name3) => {
  console.log(
    `I have three kids, and their names are ${name1}, ${name2}, and ${name3}.`
  );
};

const derek = {
  name: 'Derek',
  age: 32
};

const kids = ['Cody', 'Kayla', 'Logan'];

sayName.apply(derek, kids);

// Principle 4

// code example for Explicit Binding
const Team = function (name, city, sport) {
  this.name = name;
  this.city = city;
  this.sport = sport;
  this.sayThis = function () {
    console.log(
      `The ${this.name} are from ${this.city} and play ${this.sport}.`
    );
  };
};

const jaguars = new Team('Jacksonville Jaguars', 'Jacksonville', 'football');
const gators = new Team('Florida Gators', 'Gainesville', 'college sports');
const magic = new Team('Orlando Magic', 'Orlando', 'basketball');
const marlins = new Team('Miami Marlins', 'Miami', 'baseball');

jaguars.sayThis();
gators.sayThis();
magic.sayThis();
marlins.sayThis();