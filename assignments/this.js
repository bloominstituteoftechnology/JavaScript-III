/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When 'this' refers to the window/console object
* 2. Implicit Binding - When 'this' refers to the object left of a method in dot/bracket notation.
* 3. Explicit Binding - When 'this' is explicitly stated in a method such as call,apply, or bind.
* 4. New Binding - When 'this' refers to a specific instance of a constructor function that was made.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const me = {
    name: "Evan",
    sayName: function () {
        console.log(this.name);
    }
}
me.sayName();

// Principle 3

// code example for New Binding
const VideoGameObject = function (attributes) {
    this.name = attributes.name;
    this.type = attributes.type;
    this.level = attributes.level;
    this.description = function () {
        console.log(`${this.name} is a ${this.type}, and is level ${this.level}`);
    }
}
sword = new VideoGameObject({
    name: "Death Eater",
    type: "Sword",
    level: 90
})
sword.description();


// Principle 4

// code example for Explicit Binding
const SwordMaster = function (attributes) {
    VideoGameObject.call(this, attributes);
    this.weaponName = attributes.weaponName,
        this.weaponEffect = attributes.weaponEffect
}

SwordMaster.prototype = Object.create(VideoGameObject.prototype);

SwordMaster.prototype.weaponDescription = function () {
    console.log(`${this.weaponName}: ${this.weaponEffect}`)
}

const player1 = new SwordMaster({
    name: "Eios",
    type: "SwordMaster",
    level: 93,
    weaponName: "Muramasa",
    weaponEffect: "Effect will initiate once in battle. Constantly craving blood, Muramasa's base damage will increase with each foe slain, up to a max multiplier of 3x. If no foe is slain within 15 seconds, Muramasa will feast off the life of it's owner at a rate of 10 hp per second."
})


player1.weaponDescription();

