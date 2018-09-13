/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBind() {
    console.log(this)
}

windowBind();

// Principle 2

// code example for Implicit Binding

// const crossFitter = {
//     'name': 'Jordan',
//     'height': '5 foot 10 inches',
//     'front_squat': '300lbs',
//     'canLift': function() {
//         console.log(`${this.name} can front squat ${this.front_squat}.`)
//     }
// }

// crossFitter.canLift();



// Principle 3

// code example for New Binding

// function LifterPerson(lifter) {
//     this.lifter = lifter;
//     this.sup = "you lift bro?";
//     this.speak = function() {
//         console.log (`Hey, ${this.lifter}, ${this.sup}`);
//     }
// }

// const jordan = new LifterPerson('Jordan');

// jordan.speak();



// Principle 4

// code example for Explicit Binding
 
// Example 1 .call

// const crossFitter = {
//     'name': 'Jordan'
// }

// const lift1RM = ['backsquat: 345lb', 'deadlift: 400lbs', 'snatch: 225lbs', 'clean & jerk: 275lbs']

// function crossFitter1RMLifts(lift1, lift2, lift3, lift4) {
//     console.log(`Hello my name is ${this.name}, here are my 1RM lifts: ${lift1}, ${lift2}, ${lift3}, ${lift4}`)
// }

// crossFitter1RMLifts.call(crossFitter, lift1RM[0], lift1RM[1], lift1RM[2], lift1RM[3]);

// Example 2 .apply

// const crossFitter = {
//     'name': 'Jordan'
// }

// const lift1RM = ['backsquat: 345lb', 'deadlift: 400lbs', 'snatch: 225lbs', 'clean & jerk: 275lbs']

// function crossFitter1RMLifts(lift1, lift2, lift3, lift4) {
//     console.log(`Hello my name is ${this.name}, here are my 1RM lifts: ${lift1}, ${lift2}, ${lift3}, ${lift4}`)
// }

// crossFitter1RMLifts.apply(crossFitter, lift1RM);

// Example 3 .bind

// youLiftBro = crossFitter1RMLifts.bind(crossFitter, ...lift1RM);

// youLiftBro();

