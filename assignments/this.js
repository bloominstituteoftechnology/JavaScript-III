/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When "this" is called without anything already bound to it, it will try to go to the window.
* 2. Implicit Binding - Calling "this" from within the block scope of an object means it will be bound to the object
* 3. Explicit Binding - When "this" is bound via either .call(), .apply(), or .bind()
* 4. new Binding - When making a constructor function, "this" will be bound to whatever new object is created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const me = {
    "name": "Andre",
    sayHi: function() {
        return `Hi, my name is ${this.name}.`;
    }
}
console.log(me.sayHi());
// Principle 3

// code example for New Binding
function AngryPerson(yellAt) {
    this.yellAt = yellAt;
    this.angry = "What are you doing";
    this.scream = function() {
        console.log(`${this.angry}, ${this.yellAt}?!`)
    }
}

const archie = new AngryPerson("Edith");
archie.scream();
// Principle 4

// code example for Explicit Binding
const myInfo = {
    "name": "Andre"
}

const skills = ["Semantic HTML", "Flexbox", "JavaScript"];

function introduce(skills1, skills2, skills3){
    console.log(`Hi, my name is ${this.name} and I'm learning ${skills1}, ${skills2}, and ${skills3}`);
}

introduce.call(myInfo, ...skills);