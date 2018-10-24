/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the basic or default binding used for 'this', and will
display default information. 
* 2. Implicit Binding is . or dot notation is used to invoke a function, 
and when it is used whatever is on the left of the dot is the context for 
'this'.
* 3. 
* 4. Explicit Binding is when you use the .call(), .apply() or .bind(), and when 
using explicit binding we ignore anything that is placed before the . because whatever
we are calling after is exaclty what we want returned.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function helloEveryone () {
//     console.log('Hello from Angie!');
//   };
  
//   window.helloEveryone();
// Principle 2

// code example for Implicit Binding
// const child = {
//     name: 'Ryleigh',
//     age: function () {
//         console.log(`${this.name} is 6`)
//     }
// }
// child.age();
// Principle 3

// code example for New Binding
// const Children = function (name, age, gender) {
//     this.name = name
//     this.age = age
//     this.gender = gender
// }
// const myChild = new Children('Sophia', 1, 'Female');
// console.log(myChild);

// Principle 4

// code example for Explicit Binding
const self = {
    name: 'Angie'
}
let favoriteThings = ['Books', 'Horror Movies', 'My Children']
function introduce (thing1, thing2, thing3) {
console.log(`Hello, my name is ${this.name} and these are my favorite things ${thing1}, ${thing2} and ${thing3}`) }
introduce.call(self, favoriteThings[0], favoriteThings[2], favoriteThings[3]);