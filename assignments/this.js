/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global - refers to the window Object
* 2. Implicit Binding - when a function is invoked, whatever is to the left of the dot is where 'this' is bound
* 3. New Binding - refers to the object that is returned by a constructor function - called by using the 'new' keyword
* 4. Explicit Binding - whenever the call, apply or bind methods are used, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function birdCall(sound) {
  return sound;
}
console.log(birdCall("cheep cheep"));

// Principle 2

const dogBark = {
    "barkOne" : "woof",
    "dogDoes" : function(activity) {
        return `${this.barkOne} i like to ${activity}`;
    }
}

console.log(dogBark.dogDoes("poop inside"))

// Principle 3

function interests(thing) {
    this.likes = "I really like";
    this.thing = thing;
    this.tellMe = function() {
        return (this.likes + " " + this.thing)
    }
}

const trump = new interests('money');
const dog = new interests('pooping inside');

console.log(trump.tellMe())
console.log(dog.tellMe())

// Principle 4

let me = {
    name: 'Jacob'
}

let sayName = function(hobby1, hobby2, hobby3) {
    return "My name is " + this.name + " I like " + hobby1 + " , " + hobby2 + " and " + hobby3;
}

let hobbies = ['eating','napping','CODING DUH'];

console.log(sayName.apply(me, hobbies))