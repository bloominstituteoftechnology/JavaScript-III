/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - If no other binding is attached, the window is used for "this"
* 2. Implicit Binding - "this" is bound upon invoking the function
* 3. Explicit Binding - "this" is specified upon function.call in an argument
* 4. New Binding - "this" is bound on creation of new object from constructor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.greeting = "Hello!";

// Principle 2

// code example for Implicit Binding
const playerChar = {
  'name': 'John',
  'HP': 20,
  'report': function() {
    console.log(`My name is ${this.name} and I have ${this.HP} HP.`);
  }
}
playerChar.report();

// Principle 3

// code example for New Binding
//constructor function for creating playerChars
function CharacterGen(player) {
  this.name = player;
  this.HP = 20;
  this.report = function() {
    console.log(`My name is ${this.name} and I have ${this.HP} HP.`);
}
}
const human = new CharacterGen('Artemis');
human.report();
// Principle 4

// code example for Explicit Binding

function threaten(enemy1, enemy2, enemy3) {
  console.log(`I am ${this.name} and I will slay ${enemy1} and ${enemy3}, and especially ${enemy2}!!`)
}
const enemies = [
  'Orc',
  'Goblin',
  'Troll',
]

threaten.call(human, ...enemies);
