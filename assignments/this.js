/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW - this refers to the window object when in the global scope.
* 2. IMPLICIT - this refers to the object directly left of the dot from the function calling it.
* 3. EXPLCIT - When "call" or "apply" is used, this refers to the object used as the first argument.
* 4. NEW - When using constructor functions, this refers to the new object being created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function windoze() {
//   console.log(this);
//   return;
// }

// windoze();



// Principle 2

// code example for Implicit Binding

// const rocky = {
//   salutation: 'Yo!',
//   action: 'Punch',

//   adrian: function() {
//     console.log(`${this.salutation} Adrian!`);
//   },

//   drago: function() {
//     console.log(`${this.action} Drago until he's knocked out.`);
//   }
// }

// rocky.adrian();
// rocky.drago();



// Principle 3

// code example for New Binding

// function MovieBoxer(theme) {
//   this.themeSong = theme;
//   this.fight = function(opponent) {
//     console.log(`The crowd goes wild as "${this.themeSong}" plays before the big fight with ${opponent}.`);
//   }
// }

// const apollo = new MovieBoxer('Living in America');

// apollo.fight('Ivan Drago');

// Principle 4

// code example for Explicit Binding

const fighterName = {
  'name': 'Rocky'
}

const trainingLocations = ['meatlockers', 'the beach', 'the arctic', 'the gym'];

function trainingRegimen(loc1, loc2, loc3, loc4) {
  console.log(`${this.name} trains at places like ${loc1}, ${loc2}, ${loc3}, and ${loc4}`);
}

trainingRegimen.call(fighterName, ...trainingLocations);

