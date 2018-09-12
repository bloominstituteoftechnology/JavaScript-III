/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global when the function this is invoked without any other definitions of it.
* 2. Implicit Binding: Invoking a function with this such as this.function
* 3. Explicit Binding: when methods like .call(), .apply() and bind() are used on a function
* 4. New Binding: this will require us to build _proto_ tree in order access different variables from constructors
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding

const SomeObject = function (){
    this.name = 'someObjName';
};

SomeObject.prototype.someFunction = function (anotherName) {
    console.log(`${this.name} is ${anotherName}`);
};

let csgo = new SomeObject();
csgo.someFunction('Counter-Strike Global Offensive');
// Principle 3

// code example for New Binding
Humanoid.prototype = Object.call(CharacterStats.prototype);
function Humanoid (humanAttributes) {
    this.faction = humanAttributes.faction;
}

CharacterStats.prototype = Object.call(Humanoid.prototype)
function CharacterStats(charAttributes) {
    this.hp = charAttributes.hp;
}
// this will need to be called in order to access variables throughout different constructors
// Principle 4

// code example for Explicit Binding
let person = {name: 'Oleks', countryFrom: ' from Ukraine'};
SomeObject.prototype.someFunction.call(person,  person.countryFrom);