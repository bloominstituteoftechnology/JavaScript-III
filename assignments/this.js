/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global: used in a global scope, "this" refers to the window object
* 2. implicit: when a method is called in an object.method context, "this" refers to the object to the left of the method
* 3. explicit: "this" is bound using .call, .apply, or .bind
* 4. new: when creating an object with an object creator function, "this" refers to the new object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = 'testName';
console.log(this.name);

// Principle 2

// code example for Implicit Binding
const steve = {
    name: 'Steve',
    heightInBlocks: 2,
    favoriteTree: 'acacia',
    punchTrees: function(treeType) {
        console.log(`A log broke off the ${treeType} tree.`);
    }
}

steve.punchTrees('oak');
steve.punchTrees('birch');

// Principle 3

// code example for New Binding

function MinecraftMonster(type, noise, health, weapon) {
    this.type = type;
    this.noise = noise;
    this.health = health;
    this.attack = function() {
        console.log(`The evil ${this.type} monster attacked Alex with its ${weapon} and it emitted a terrible ${this.noise}.`)
    }
}

const creeper = new MinecraftMonster('creeper', 'SSSsss', 20, 'explosion');
const skeleton = new MinecraftMonster('skeleton', 'clank', 20, 'bow and arrow');
const enderman = new MinecraftMonster('enderman', 'bope bope', 40, 'arms');

creeper.attack();
skeleton.attack();
enderman.attack();

// Principle 4

// code example for Explicit Binding

// creeper.attack.call(skeleton);