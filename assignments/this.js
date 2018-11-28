/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - which adheres this to the whole entire global scope
* 2. Implicit binding - happens automatically when you use the this keyword in a function - the object to the left of the dot in dot notation when the function is invoked is the object the this is bound to
* 3. Explicit binding - we (the programmer) control the binding of the this keyword by using the call, apply or bind method on a function
* 4. New binding - is used when you create and use a constructor function - the this keyword is used within the function to refer to a singular item that is created within that function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function doMath() {
    console.log(this);
}
//doMath();

// Principle 2

// code example for Implicit Binding

const pet = {
    breed: 'basset hound',
    name: 'Porter',
    age: 12,
    activity: function() {
        console.log(`${this.name} is a ${this.age} year old ${this.breed} whose favorite activity is napping.`);
    }
}
pet.activity();

// Principle 3

// code example for New Binding

function DrinkOrder(bev){
    this.bev = bev;
    this.order = 'Hey, can I have a';
    this.server = function() {
        console.log(`Bartender! ${this.order}, ${this.bev} please.`)
    }
}

const rachel = new DrinkOrder('cabernet');
const kevin = new DrinkOrder('milk stout');

rachel.server();
kevin.server();
rachel.server('kevin');

// Principle 4

// code example for Explicit Binding

const cat = {
    name: 'Tyson'
}

const activities = {
    favorite: 'eating',
}

function petThings(cat, activities) {
    "use strict";
    console.log(`My cat's name is ${this.name}, and his favorite activity is, ${this.favorite}.`);
}

petThings.call(cat, activities);

