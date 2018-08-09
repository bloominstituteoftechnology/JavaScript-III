/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: occurs when no context is provided for the this keyword; "this" will always point to the window object.
* 2. Implicit binding: occurs when dot notation is used to invoke a function. Whatever is to the left of the dot becomes the "this" object in the function.
* 3. New binding: occurs when you're creating new objects. It passes in the context of the constructor function to each new object you make, so your functions are much more multi-purpose.
* 4. Explicit binding: occurs when .call(), .apply(), .bind() are used on a function. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const chef = {
    'name': 'Samwise',
    'cook': function (food1, food2) {
        console.log(`${this.name} can cook ${food1} and ${food2} and it is delicious.`);
    }
}

chef.cook("taters", "fish");

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function () {
        console.log(`${this.greeting} ${this.greeter}`);
    }
};

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4
// code example for Explicit Binding
const developer = {
    'name': 'Jim',
    'age': 40
}

const skills = ['HTML', 'LESS', 'JS'];

function introduce() {
    console.log(`My name is: ${this.name} and I like to program in: ${skills}.`);
}

introduce.call(developer, skills);