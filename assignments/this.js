/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windows/Global Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function parent() {
    console.log(this);
    return 0;
}

parent();
// Principle 2

// code example for Implicit Binding
const myObj = {
    'greeting': "What's up",
    'hi': function (name){
        console.log(`${this.greeting} ${name}!`)
    }
}
myObj.hi('Vu');

// Principle 3

// code example for New Binding
function Elf(type, gender){
    this.race = 'Elf';
    this.class = type;
    this.gender = gender;
    this.intro = function (){
        return (`Successfully created an elf ${gender} ${type}!`);
    }
}

const kyla = new Elf('mage', 'female');
console.log(kyla.intro());

// Principle 4

// code example for Explicit Binding
function welcome(name){
    return(`Welcome ${name}, an ${this.race} ${this.gender} ${this.class}!`);
}

console.log(welcome.call(kyla, 'Kyla'));

