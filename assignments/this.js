/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - the `this` keyword points to the global object --window object
*                     in the browser.
* 2. Implicit binding - the `this` keyword points to an object you created.
* 3. Explicit binding - the `this` keyword points to functions with the help of
*                       function methods.
* 4. New binding - the `this` keyword points to constructor functions and those
*                  constructor functions should use the `new` keyword to instantiate
*                  objects so that `this` will point to the constructor functions.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);  // => returns the global object, returns the window object when you
                    //    run it to the console.

// Principle 2

// code example for Implicit Binding
const hogwartsStudent = {
  'name': 'Harry Potter',
  'birthday': 'July 31, 1980',
  'house': 'Gryffindor',
  'patronus': 'Stag',
  'skills': ['apparation', 'parseltongue', 'skilled Seeker'],
  'speak': function() {
    console.log(`${this.name} can do ${this.skills[0]} and ${this.skills[1]}.`);
    console.log(`${this.name} is also a ${this.skills[2]}!`);
  }
};

hogwartsStudent.speak();

// Principle 3

// code example for New Binding
function DumbledoresArmy(name, house) {
  this.founder = 'Harry Potter';
  this.coFounders = ['Hermione Granger', 'Ron Weasley'];
  this.headquarters = 'Room of Requirement';
  this.memberName = name;
  this.houseName = house;
}

const luna = new DumbledoresArmy('Luna Lovegood', 'Ravenclaw');
const neville = new DumbledoresArmy('Neville Longbottom', 'Gryffindor');

// Principle 4

// code example for Explicit Binding
const enemyInfo = {
  'firstname': 'Tom',
  'lastname': 'Riddle',
  getFullName: function() {
    let fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  }
}

function logName(lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Can speak: ${lang1} and ${lang2}`);
}

let logEnemyName = logName.bind(enemyInfo);

logName.call(enemyInfo, 'English', 'Parseltongue');
