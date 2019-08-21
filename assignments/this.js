/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - which means that the 'this' keyword is set to the window or console object. If you are in strict mode, it goes to undefined.

* 2. Implicit binding - this clearly states what the keyword refers to, by looking to the left of the dot. It binds it to a function.  

* 3. Explicit binding - allows us to point to a certain value by using: call, apply, or bind. 

* 4. Bind - also called New binding allows us to create a new function that is permanently bound to a 'this' value.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function global(){
    console.log(this.world);
}
global();
const world = '🌎🌍🌏';


// Principle 2

// code example for Implicit Binding

let myWorld = {
    name: 'Earth',
    size: '🌎🌍🌏',
    planet: function(){
        console.log(this.size);
    }
}
myWorld.planet();

// Principle 3

// code example for New Binding

function wildSound() {
    console.log(this.sound);
}
let pigSound ={
    name: 'Bacon',
    sound: 'Oink, oink'
}
pigCall = wildSound.bind(pigSound);

pigCall();

// Principle 4

// code example for Explicit Binding

function dog(){
    console.log(this.size);
}

let myDog = {
    name: 'Pup',
    size: '🐶🐶🐶',
}
dog.call(myDog);