/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window is like the main container of objects. When looking at a forest, like Josh said, it would be the whole forest and not each individual tree 
* 2. Implicit Binding is when you create an object with static properties that you expect to for the most part only exist on that specific object
* 3. A new binding is when you want to make a function that acts as blueprints to create a new object using parameters when you invoke the function (makes it much easier to create multiple objects)
* 4. Explicit binding is a way we can control specific properties on objects and add bindings as we want.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function newFunc(){
    "use strict"
    console.log(this)
}

newFunc();

// Principle 2

// code example for Implicit Binding

const characterOne = {
    type: "warrior",
    health: 200,
    power: 20,
    damage: function(otherCharacter){
        otherCharacter.health - this.power;
    }
}

// Principle 3

// code example for New Binding

function CharacterCreator(type, health, power){
    this.type = type;
    this.health = health;
    this.power = power;
    this.damage = function(otherCharacter){
        otherCharacter.health - this.health;
    }
}

// Principle 4

// code example for Explicit Binding

const characterTwo = {
    type: "archer"
}

const damageRange = [12, 50, 5]

function doDamage(...damageRange) {
    "use strict";
    console.log(`The ${this.type} has a damage range of ${damageRange}`);
  }