/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: when none of the above apply, this points to the window. 
* 2. implicit binding: looking to the left of the dot at call time
* 3. new binding: this is bound to the new object being constructed, whenever a function is invocted with the new key word
* 4. explicet binding: tellign a function what the context of this is goign to be using call, apply, or bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.location);

// Principle 2

// code example for Implicit Binding

const guy = {
    name: 'bill',
    hello: function () {
        console.log(`Hello ${this.name}`);
    }
}

guy.hello();

// Principle 3

// code example for New Binding

function Guy(name) {
    this.name = name;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

const fred = new Guy('Fred');
fred.hello();



// Principle 4

// code example for Explicit 

const jobob = new Guy('Jobob');

const skills = ['Hunting', 'Fishing', 'Drinking'];

function sayHi(skills1, skills2, skills3){
  console.log(`Gosh. My name ${this.name}. ${skills1}, ${skills2}, ${skills3}. Amiright?`)
}

sayHi.call(jobob, ...skills);