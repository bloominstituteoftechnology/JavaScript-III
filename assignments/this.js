/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: By default, "this" points to the window object in global scope
* 2. Implicit binding: When a method is called on "this", it points to the object to which the method belongs
* 3. New binding: When a new instance of a class is created, "this" points to that new instance
* 4. Explicit binding: Allows you to specify what "this" points to using call, apply, or bind on a function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let arya = {
	'firstName': 'Arya',
	'houseName': 'Stark',
	'words': 'Winter is Coming',
	'siblings': ['Rob', 'Jon', 'Sansa', 'Bran', 'Rickon'],
	'parents': ['Eddard', 'Catelyn']
}

function sayWords(){
	console.log(this.words);
}

sayWords(); // will print "undefined" because "this" points to the window object

// Principle 2

// code example for Implicit Binding
let daenerys = {
	'firstName': 'Daenerys',
	'houseName': 'Targaryen',
	'words': 'Fire and Blood',
	'siblings': ['Rhaegar', 'Viserys'],
	'parents': ['Aerys II', 'Rhaella'],
	'children': ['Drogon', 'Viserion', 'Rhaegal'],
	'sayWords': function() {
		console.log(this.words)
	}
};

daenerys.sayWords(); // will print Targaryen words because it's called on daenerys

// Principle 3

// code example for New Binding
const Character = function(firstName, houseName, words){
	this.firstName = firstName;
	this.houseName = houseName;
	this.words = words;
};

let eddard = new Character('Eddard', 'Stark', 'Winter is Coming');
console.log(eddard.words) // will access and print Stark words


// Principle 4

// code example for Explicit Binding
let tyrion = new Character('Tyrion', 'Lannister', 'Hear me Roar!');
let unofficialWords = 'A Lannister always pays his debts';

function sayUnofficialWords(words){
	console.log(words);
};

const lannisterUnofficialWords = sayUnofficialWords.bind(tyrion, unofficialWords);
lannisterUnofficialWords(); // will print unofficialWords
