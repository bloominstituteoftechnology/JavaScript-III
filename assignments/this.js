/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 0. The 'this' keyword is used not much unlike how this is used in the english language. 'this' refers in context to something.
*
* 1. Window, or Global, binding of 'this' is 'window' in browser or 'global/console' in node. With 'use strict' enabled, the value would be undefined.
*    Window binding of 'this' is generally 'not cool' and will result in 'being lame'.
* 2. Implicit binding means 'this' is relevant in context to it's invocation. Meaning, 'this' points to the object on which the function is invoked.
* 3. New binding refers to using 'new' when invoking to a constructor function with 'this' keywords inside that refer back to the invokation. 
* 4. Explicit binding is explicitly setting the context of 'this' using call, bind, or apply.
*
* write out a code example of each explanation above
*/

// Principle 1
// 'use strict' // code example for Window Binding

// Principle 2,3
function Pokemon(attackLvl) {
    this.name = pokemonsName;
    this.go = `I choose you,`; 
    this.lvl = attackLvl;
    this.canTalk = true;
    this.attackPts = this.lvl ^ 10 * Math.random();
    this.choosePokeball = function(name, attack) { // code example for Implicit Binding (?)
        attackPt = this.attackPts;
        if (attackPt === 0) {
            attackPt = `Attack Misses! Oh No!`;
        } else if (attackPt > this.lvl * 2) {
            attackPt = `Massive blow!!! Attack hits for ${this.attackPts} points!`;
        } else {
            attackPt = `Attack hits for ${this.attackPts} points!!!`;
        }
        console.log(`${this.go} ${name} (L${this.lvl}), ${attack.toUpperCase()}!!!  ${attackPt}`);
    };
}
let pokemonsName = 'Pikachu';
let pokemonsAttack = 'scratch';
let pokemonsLevel = 6;
const pokemons = new Pokemon(pokemonsLevel);  // code example for New Binding
pokemons.choosePokeball(pokemonsName, pokemonsAttack); // code example for Implicit Binding (?)

// Principle 4
// This is kinda fuzzy still; I plan to come back to this.
function PokemonStats(pokemonAttrs) {
    Pokemon.call(this, pokemonAttrs); // code example for Explicit Binding
    this.charLevel = pokemonAttrs.charLevel;
}
PokemonStats.prototype = Object.create(Pokemon.prototype);

PokemonStats.prototype.checkCharLevel = function() {
    if(this.charLevel > 1) {
        console.log(`Character level: ${this.charLevel}`);
        return this.charLevel;
    } else {
        console.log(`You need to level up, you're pokemon is a ${this.charLevel}`);
        return false;
    }
};
const newPokemonStats = new PokemonStats(
    {
        charLevel: 10
    }
);
newPokemonStats.checkCharLevel();

