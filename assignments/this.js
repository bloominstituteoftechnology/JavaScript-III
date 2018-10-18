/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* As I understand, it's understanding the heirarchy/precedent rules for knowing this is referencing
* 
* 1. Is the function called by a new?
* 2. Is the function called by a call(), apply(), or bind()?
* 3. Is the function called by a object's method?
* 4. Is the function called in the global scope?
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function helloWorld(msg){
	console.log('Hello ' + name);
	console.log(this);
}
helloWorld('World')

// Principle 2
// code example for Implicit Binding

var character = {
	race: "Elf",
	class: "Priest",
	name: "Elfie",
	hail: function(targetName){
		console.log("Hi " + targetName + ", I'm " + this.name);
	}
}
character.hail("A Large Ogre");

// Principle 3
// code example for New Binding

function attackRoll(numberOfDice, modifiers) {
    this.numberOfDice = numberOfDice;
    this.modifiers = modifiers;
    this.roll = function() {
        console.log(this.numberOfDice + this.modifiers);
        console.log(this);
        console.log("Roll: " + (this.numberOfDice*6 + this.modifiers) );
    }
};

var baseAttackRoll = new attackRoll(2,0);
var plusOneAttackRoll = new attackRoll(2,1);

baseAttackRoll.roll();
plusOneAttackRoll.roll();

// Principle 4
// code example for Explicit Binding

baseAttackRoll.roll.call(baseAttackRoll);
plusOneAttackRoll.roll.apply(plusOneAttackRoll);
