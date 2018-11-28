/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, which you really shouldn't use, and refers back to "this" as the window.
* 2. Implicit Binding, which is automatic binding.
* 3. Explicit Binding, which you control using .call(), .apply(), and .bind().
* 4. New Binding, which uses "this" to create new objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello() {
    console.log(this);
}

hello();

// Principle 2

// code example for Implicit Binding

const wizard = {
    name: 'Harry Potter',
    spell: 'expelliarmus',
    cast: function() {
        console.log(`${this.name} casts ${this.spell}!`);
    }
};
wizard.cast();

// Principle 3

// code example for New Binding

function LevitationPartner(partner){
    this.partner = partner;
    this.incantation = 'Wingardium Leviosa';
    this.showOff = function() {
        console.log(`${this.partner}, look! ${this.incantation}!`)
    }
};

const hermione = new LevitationPartner('Ron');
const ron = new LevitationPartner('Hermione')

ron.showOff();
hermione.showOff();

// Principle 4

// code example for Explicit Binding

const slytherin = {
    name: 'Draco Malfoy'
}

const spells = ['Rictusempra', 'Locomotor Mortis', 'Petrificus Totalus'];

function duel(spells1, spells2, spells3) {
    console.log(`You think you can best ${this.name}? Ha! We'll see about that. ${spells1}! ${spells2}! ${spells3}!`);
}

duel.call(slytherin, ...spells);