/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - When a funtion in invoced, if you look to the left of the dot, that is what is being referenced.
* 2. Explicit Binding - This occurs when .call()- pass one by one, .apply()-pass on with an array, or .bind()- same as .call but returns new function to invoke later,  are used in a function
* 3. New Binding - when a function is invoked with the new keyword, the this keyword inside that function is bound to the new object being constructed.
* 4. Window Binding - if non of the rules apply, the this key word will default to the windo object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let sayHeight = function(){
    console.log(this.height);
};

let me = {
    height: 70
};

sayHeight();

// Principle 2

// code example for Implicit Binding

// let me = {
//     name: 'Jake',
//     age: 27,
//     height: 70,
//     sayHeight: function(){
//         console.log(`I am ${this.height} inches tall!`);
//     }
// };
// me.sayHeight();

// Principle 3

// code example for New Binding

// let Animal = function(color, name, type){
//     this.color = color;
//     this.name = name;
//     this.type = type;
// };

// let horse = new Animal ('brown', 'Charly', 'Horse');

// Principle 4

// code example for Explicit Binding
//==============.call
// let sayHeight = function(){
//     console.log(`I am ${this.height} inches tall!`);
// }

// let me = {
//     name: 'Jake',
//     age: 27,
//     height: 70,
// };

// sayHeight.call(me);

//==============.apply

// let sayHeight = function(hobby1, hobby2, hobby3){
//     console.log(`I am ${this.height} inches tall! I like` + hobby1 `, ` + hobby2 `, and ` + hobby3);
// }

// let me = {
//     name: 'Jake',
//     age: 27,
//     height: 70,
// };

// let hobbies = ['Cornhole', 'Disc Golf', 'Pickleball'];

// sayHeight.bind(me, hobbies);