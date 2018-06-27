/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding -- refers to when the "this" keyword defaults to referring to the window/global object in lieu of other options.
* 2. Implicit binding -- the "this" keyword refers to whatever is left of the dot when we call our function.
* 3. New binding -- when "new" keyword is used to invoke constructor function to create a new object, the "this" keyword inside that function is bound to the new object being constructed. 
* 4. Explicit binding -- uses .call(), .apply(), and .bind() to explicitly bind "this" to a particular object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saysYo (){
    console.log(`${this.name} says Yo!`)
};

const kyle = {
    name: 'Kyle'
};

saysYo();

// Principle 2

// code example for Implicit Binding

const kyle = {
    name: 'Kyle',
    age: 28,
    hometown: 'Phoenix',
    saysHi: function (){
        console.log(`Hello, my name is ${this.name}`);
    }
}

kyle.saysHi();

// Principle 3

// code example for New Binding

const Person = function(name, age, hometown) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
};

const kyle = new Person('Kyle', 28, "Chicago");

console.log(kyle);

// Principle 4

// code example for Explicit Binding

function listSkills (skill1, skill2, skill3) {
console.log(`Hi, my name is ${this.name}, and my skills include ${skill1}, ${skill2}, and ${skill3}`)
}

const kyle = {
    name: 'Kyle',
    age: 28,
    hometown: 'Phoenix',
}

const skills = ['running', 'jumping', 'swimming'];

listSkills.apply(kyle, skills);
