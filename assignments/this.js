/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global scope of this is calling on properties of the window object.
* 2. Explicit - calling from another function to a specified global object
* 3. Implicit - calling from within object
* 4. new - building a new object using another objects parameters for creating new objects properties
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalBinding(gblBind) {
    console.log(this);
    return gblBind; //?
};
globalBinding("Hello");

// Principle 2

// code example for Implicit Binding
const implicitBinding = {
    hello: "Hello",
    sayHello: function(name) {
        console.log(`${this.hello}, ${name}!`); 
    }
};

// Principle 3

// code example for New Binding
function Person(name) {
    this.name = name;
    this.greeting = 'Hello';
    this.greet = function() {
        console.log(`${this.greeting}, ${this.name}!`)
    }
};
const matthias = new Person("Matthias");
matthias.greet();

// Principle 4

// code example for Explicit Binding
let job = {
    position: 'SDE',
    yearsExp: 5
};

let jobListing = function (skill1, skill2, skill3) {
    console.log(`Hiring: ${this.position} - Experience Required: ${this.yearsExp} years - Skills Required: ${skill1}, ${skill2}, ${skill3} - React and Node are a plus.`);
}

let skills = ['HTML', 'CSS', 'JS'];

jobListing.apply(job, skills);