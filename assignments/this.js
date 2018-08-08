/* The four principles of "this"
* In your own words, explain the four principle for the "this" keyword below.
*
* 1. Window/Global: When in the Window/Global scope, this refers to the Window Object.
* 2. Implicit: When in the Implicit scope, this refers to the preceeding object in the obj.method().
* 3. New: When a constructor is used, this refers to the instance of the object being created.
* 4. Explicit: Whenever call or apply methods are used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
this.obj = {'username': 'Vera'};
function sayMyName(obj) {
  console.log(this.username)
}
sayMyName("Heather");

// Principle 2
// code example for Implicit Binding
const myObj = {
    'name': 'Arthur',
    'quest': function(questItem) {
      console.log( `Wizard: What is your quest?\n${this.name}: ${questItem}`);
    }
  }
  myObj.quest("To find the grail!");

// Principle 3
// code example for New Binding
function swallows(location) {
    this.greeting = 'What is the air speed velocity of an unladen swallow?';
    this.location = location;
    this.speak = function() {
      console.log( `${this.greeting}\n ${this.location}`);
    }
  }
  const arthur = new swallows('African or European?');
  arthur.speak();

// Principle 4
// code example for Explicit Binding
const kingOfEngland = {
    'name': 'Arthur'
  }
  
  const inventory = ['coconut halves', 'Excalibur', 'Knights of the Round Table'];
  
  function introduce(skill1, skill2, skill3) {
    console.log(`My name is ${this.name} and I ride the land with ${skill1}, ${skill2}, and ${skill3}`);
  }
  
  introduce.call(kingOfEngland, inventory);
  introduce.apply(kingOfEngland, inventory);
  let holdOn = introduce.bind(kingOfEngland, ...inventory);
  holdOn();
  introduce(inventory);
