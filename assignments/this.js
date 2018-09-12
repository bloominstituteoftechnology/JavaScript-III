/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// If nothing is bound to this it refers to the window itself.
console.log(this);

// Principle 2

// code example for Implicit Binding

const gun = {
  'name': 'colt 45',
  'ammo': ".45",
  'fire': function() {
    console.log(`${this.name} can fire: ${this.ammo}`)
  }
}

gun.fire();

// Principle 3

// code example for New Binding

function newPerson(person, age){
  this.person = person;
  this.age = age;
}

// New binding and constructor functions are bread and butter
const john = new newPerson('John', 25);

console.log(john);

// Principle 4

// code example for Explicit Binding

const worker = {
  'name': 'jill'
}

const skills = ['Writing', 'Drawing'];

function assignWorker(skills1, skills2){
  console.log(`Hello!  My name is: ${this.name} and my main skills are: ${skills1}, and ${skills2}`)
}

assignWorker.call(worker, ...skills);
