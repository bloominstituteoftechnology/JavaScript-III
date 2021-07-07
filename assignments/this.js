/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
* 2. Implicit Binding
* 3. Explicit Binding
* 4. New Binding
* 
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.topic = 'Javascript';
function whatTopic() {
    console.log(`The current course is ${this.topic}.`);
}

whatTopic();

// Principle 2

// code example for Implicit Binding
const car = {
    make: 'Cadillac',
    model: 'CTS-V',
    color: 'Silver',
    speed(){
        console.log(`The ${this.make} ${this.model} goes 0-100 in 15 seconds'`);
    }
};

car.speed();

// Principle 3

// code example for New Binding
function House (rooms, material) {
    this.rooms = rooms;
    this.material = material;
    this.description = function() {
        console.log(`You see a ${this.rooms} bedroom house made out of ${this.material}.`);
        
    };
};
 const newHouse = new House(5, 'red bricks');
 newHouse.description();
 

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Jimmy'
}
 function level (){
    console.log(`The manager named ${this.name} got a promotion!`);
}
 level.call(person);