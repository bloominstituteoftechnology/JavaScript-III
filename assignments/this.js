/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding- when this is used globally, this will be the entire window like the forest in our example today.
* 2. Implicit binding- automatic binding, looks to the left of the method to determine the keyword this will be applied to.
* 3. New binding- used when we create new objects off of our original constructor
* 4. Explicit binding- we forced the binding by using the call and apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

function eatFood() {
    console.log(this)
}
eatFood('Pizza')
// Principle 2
const animal = {
    name: 'Horse',
    eats: 'grass',
    speed: 'fast',
    speaks: function() {
        console.log(`${this.name} runs ${this.speed}`);
    }
}
animal.speaks();

// Principle 3

function Player(baller){
    this.baller = baller;
    this.skill = 'dunking';
    this.speak = function() {
        console.log(`${this.baller}'s best skill is ${this.skill}`)
    }
}
const vince = new
Player('Vince Carter');
const larry = new
Player('Larry Nance')
vince.speak();
larry.speak()
// Principle 4

const rapper = {
    name: 'Nas'
}

const abilities = ['flow', 'story telling', 'street knowledge'];

function bestAbilities(ab1, ab2, ab3) {
    console.log(`My name is ${this.name} and my best rap abilities are ${ab1}, ${ab2}, ${ab3}`);
}

bestAbilities.apply(rapper, abilities)