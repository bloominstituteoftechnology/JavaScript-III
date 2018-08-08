/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function letsTalk(speak) {
	console.log(this);
	return speak;
}

letsTalk("What's your name?");

// Principle 2

// code example for Implicit Binding
const myConvo = {
	greeting: 'Welcome.',
	sayIntro: function(avatarName) {
		console.log(`${this.greeting} I\'m called ${avatarName}.`);
	},
};
myConvo.sayIntro('Dragon Slayer');

// Principle 3

// code example for New Binding
function Character(avatarName) {
	this.intro = 'Welcome.';
	this.avatarName = avatarName;
	this.speak = function() {
		console.log(`${this.intro} ${this.avatarName}.`);
	};
}
const slayer = new Character('Dark Storm');

slayer.speak();

// Principle 4

// code example for Explicit Binding
const player = {
	name: 'Lavon',
	avatarName: 'Slayer',
	characterType: 'Magic',
};

const playerSkills = ['Fire', 'Weaponry', 'Strength'];

function characterSpawn() {
	console.log(
		`I am ${
			this.avatarName
		} and I possess these skills ${playerSkills}. Fear me!`
	);
}

characterSpawn.call(player, playerSkills);
