/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - basic binding of this keyword
* 2. implicit binding - left of the dot when called.
* 3. new binding - introducing new objects 
* 4. explicit binding - call, apply, bind
*
* write out a code example of each explanation above
*/

//Window binding

console.log(this) ;

// implicit binding

const creature = {
  name: 'xeno',
  summon: function () {
    console.log(`${this.name} has been summoned`)}
  }; console.log(creature.summon("dark"));
 
// new binding
const creatureVariant = function(name, summon,summonType, type){
    this.name = name,
    this.summon = summon,
    this.summonType = summonType,
    this.type = type
    };

const darkSummon = new creatureVariant ("placi","symbol summoned",function () {
      console.log(`${this.name} has been ${this.summon}`)} , "light" )
console.log(darkSummon)


// Explicit Binding

const guardian = {
  name: 'Stigmas'
}

var characteristics = ['strong', 'intelligent', 'fast', 'protective']

function describe (characteristics1, characteristics2, characteristics3, characteristics4) {
  console.log(` ${this.name} guardian who is ${characteristics1}, ${characteristics2}, ${characteristics3}, and ${characteristics4}`)
}

describe.call(guardian, characteristics[0], characteristics[1], characteristics[2], characteristics[3])


