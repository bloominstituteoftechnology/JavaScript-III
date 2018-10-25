/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When 'this' refers to the window/console object
* 2. Implicit Binding - When 'this' refers to the object left of a method in dot notation
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
    sayName: function(){
        console.log(this.name);
    }
}
me.sayName();

// Principle 3

// code example for New Binding
const Weapon = function(name,type,level){
    this.name = name;
    this.type = type;
    this.level = level;
    this.description = function(){
        console.log(`You have picked up ${this.name}, it is a ${this.type}, and is level ${this.level}`);
    }
}
sword = new Weapon('Death Eater', 'Sword', '90');
sword.description();


// Principle 4

// code example for Explicit Binding
const wepBroke = function(){
    console.log(`${this.name} broke! You are unarmed...`)
}
wepBroke.call(sword);