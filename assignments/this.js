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
// code example for Window Binding


// Principle 2
// Principle 3
// Principle 4

function Pokemon(attackLvl) {
    this.go = `I choose you,`; 
    this.lvl = attackLvl;
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
const pokemons = new Pokemon(6);  // code example for New Binding
pokemons.choosePokeball('Pikachu', 'scratch'); // code example for Implicit Binding (?)
pokemons.choosePokeball('Charmander', 'flame');

// code example for Explicit Binding

function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
}
  
Fruit.prototype.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
};
  
Fruit.prototype.calculateCals = function() {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana(bananaAttrs) {
    Fruit.call(this, bananaAttrs);
    this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
}

Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
    if(this.doMonkeysLikeIt) {
        return true;
    } else {
        return false;
    }
};

const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
});


// newKiwi.shipped('Alaska');
newBanana.shipped('Colorado');
newBanana.checkIfMonkeysLikeIt(); // returns true
// newKiwi.checkIfMonkeysLikeIt(); // won't work
// newKiwi.checkIfFuzzy(); // returns true
// newBanana.checkIfFuzzy(); // won't work
newBanana.calculateCals();
// newKiwi.calculateCals();