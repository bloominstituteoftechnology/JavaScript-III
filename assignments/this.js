/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding will be the value when in global scope
* 2. The object before . is this.
* 3. When a constructor function is used. This refers to the specific instace of the object.
* 4. Explicit binding has you call out an object specifically to bind to and what it does.
*
* write out a code example of each explanation above
*/

// Principle 1

function petType(type) {
    console.log(this);
    return type;
}

petType('bird');

// Principle 2

const pikachu = {
    nickname: 'Thunder',
    greeting: 'pika',
    sayHi: function(){
      console.log(`${this.greeting}, ${this.greeting} my nickname is ${this.nickname}`);
    }
  
  
  }
  
  pikachu.sayHi();

// Principle 3

function imaPokemon(pokemon, sound) {
    this.pokegreeting = sound,
    this.pokemon = pokemon,
    this.speak = function() {
        console.log(this.pokegreeting + '! ' + this.pokemon);
    }
}

const charmander = new imaPokemon('chamander', 'char');
const bulbasaur = new imaPokemon('bulbasaur', 'bulba');

charmander.speak();



// Principle 4

charmander.speak.call(bulbasaur);