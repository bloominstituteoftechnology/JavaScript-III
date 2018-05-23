/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this is a reference or a point to the object. 
* 2. It is a sort of place-holder that will plug in Object name-space to access properties in the an object
* 3. it allows pass-thru to fill in the space to left of the dot. 
  4. The scope of this matters when/where it is invoked. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//function doSomthing(example) {
 // console.log(this);
  //return name;
//}
//doSomthing("forgot the e in do something...");

// Principle 2

// code example for Implicit Binding

const pet = {
	name :"miles",
	animal:"dog",
	favoriteTreat:"bone",
	speak: function(){
		console.log(`${this.name} : woof-woof!`);
	}


}
pet.speak()


// Principle 3

// code example for New Binding

function ScottishRebel(name){
	this.name = name;
	this.scream = function(){
		console.log(this.name + ': FREEEEEEDDOOOM!')
	}
}

const williamWallace = new ScottishRebel('William Wallace');
williamWallace.scream();

// Principle 4

// code example for Explicit Binding



let hero = {
	name: 'Link',
	age: '13'
};

let weapons = ['Sword', 'Boomerang', 'Bow & Arrow' ]

let promise = function(fightingSkill1, fightingSkill2, fightingSkill3){
	console.log(`I ${this.name}, will destroy Ganon with-out my ${fightingSkill1} or my ${fightingSkill2} or even my ${fightingSkill3}, but with my bare hands!`);
}

promise.call(hero, ...weapons);











