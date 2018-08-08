/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Binds the this keyword to the window. So a global this of sorts
* 2. Implicit binding is binding this to the object on the left of a dot notation on invoke
* 3. Binding of this binds the attributes of an object to a new constructor
* 4. Explicit is used with .call() .apply() or .bind() used on a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this.name);

// Principle 2

// code example for Implicit Binding
const myObj = {
    'name': 'Obi-Wan',
    'title': 'Jedi',
    'force': function(force){
        console.log(`${this.name} uses ${force} as is the way of the ${this.title}`);
    }
}
myObj.force('mind control');
// Principle 3

// code example for New Binding
function PadawanLearner(lightsaberColor){
    this.equip = 'Equips';
    this.lightsaberColor = lightsaberColor;
    this.force = function(){
        console.log(`${this.equip} ${this.lightsaberColor} lightsaber ,and begins his lifes training`);
    }
}

const anakin = new PadawanLearner('green');

anakin.force();

// Principle 4

// code example for Explicit Binding

const sithLord = {
    'name': 'Vader',
    'side': 'dark'
}

const forcePowers = ['choke', 'push','pull'];

function forceKnowledge(forcePowers,forcePowers2,forcePowers3){
    console.log(`I, ${this.name}, have obtained the knowledge for ${forcePowers}, ${forcePowers2} ,and ${forcePowers3}`);
}
forceKnowledge.call(sithLord, ...forcePowers);