/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - When 'this' is used in the global scope
* 2. Implicit binding - When 'this' is used with an object
* 3. Explict binding - When 'this' is used with the .call, .apply or .bind methods
* 4. New binding - When 'this' is used in a construtor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function getWindow(){
  return this;
}
//console.log(getWindow());

// Principle 2

// code example for Implicit Binding
let car = {
    model: 'Chevy',
    drive: function(){
        return `${this.model} goes voom`;
    }
}

console.log(car.drive());

// Principle 3

// code example for New Binding
function Character(obj){
    this.species = obj.species;
    this.clan = obj.clan;
    this.weapon = obj.weapon;
    this.declare = function(){
        return `I'm a ${this.species} ${this.clan}, and I will destroy you with my ${this.weapon}`;
    }
}

const ElfWarrior = new Character({
    species: 'Elf',
    clan: 'Warrior',
    weapon: 'War Hammer'
})

console.log(ElfWarrior.declare());

// Principle 4

// code example for Explicit Binding
const eric = {
    name: 'Eric',
    city: 'Maricopa',
    state: 'Arizona'
}

const likes = ['Programming', 'Sim Racing', 'Watching College Football'];

function meet(l1, l2, l3){
    return `I'm ${this.name}, from ${this.city}, ${this.state}, and I like ${l1}, ${l2} and ${l3}`;
}

console.log(meet.call(eric, ...likes));
console.log(meet.apply(eric, likes));

const meetMe = meet.bind(eric);
console.log(meetMe(...likes));