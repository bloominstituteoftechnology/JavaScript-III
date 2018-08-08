/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. I have no clue what this is asking.
* 2.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.sum = 0;

function incrementSum(sum) {
  console.log(++this.sum);
}

incrementSum(sum);

// Principle 2

// code example for Implicit Binding

const bitcoinKey = {
  'x_pos': 27.2,
  'y_pos': 42.1,
  'print': function(x, y) {
        console.log(`The coordinates on the curve for your BTC key are (${this.x_pos},${this.y_pos})`);
  }
}

bitcoinKey.print(5, 6); // I like this example because it shows that "this" binds to the object rather than the immediate arguments given to the function so 'print' is basically useless.
bitcoinKey.print(1, 2);

// Principle 3

// code example for New Binding

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.solve = function() {
    console.log(`${this.a}^2 + ${this.b}^2 = ${this.c}^2`); // No need for arguments inside the function due to scope of 'this'
  }
}

const Triangle1 = new Triangle(3, 4, 5);
// Principle 4

// code example for Explicit Binding

// const developer = {
//   'name': 'Jim',
//   'age': 40
// }

const soundCloudRapper = {
  'name': 'LilOJDaGod',
  'age': 16,
  'clout': 100000000000000000; //so much clout.
  'followers': 4938;
  'outfit': 'gucci w a lowercase g';
}

const skills = ['...', '<null>', 'New mixtape dropping October 31st: LilOJDaGod Strikes Back'];

function mixTapeIntro(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I'm from Hollywood, CA but I watched season 2 of Power, and this is what happened to my impressionable mind, so with that being said ${skill1}, ${skill2}, ${skill3}`);
}

mixTapeIntro.call(soundCloudRapper, skills) //thisArg is the soundCloudRapper object.
