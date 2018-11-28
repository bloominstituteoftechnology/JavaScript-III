/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Using .this in the global scope refers to the window
* 2. Using .this within a certain block scope, what you're referring to is automatic/implied.
* 3. Using a constructor function and the new keyword, .this refers to the Object new instantiates.
* 4. Harcoding what the .this refers to using .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const celeb = {
    name: 'Tony Hawk',
    occupation: 'Skater',
    greet: function() {
        console.log(`Sup, I'm ${this.name}, and I shred.`)
    }
};
celeb.greet();

// Principle 3

// code example for New Binding

function Person (name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.greet = 'Aye!',
    this.intro = function() {
        console.log(`${this.greet}, I'm ${this.name}. My birthday is ${this.birthday}`);
    }
};
const amy = new Person('Amy', '12/31/1990');
amy.intro();

// Principle 4

// code example for Explicit Binding

const school = {
    name: 'Lambda School'
};

const classes = ['FSW, Data-Science','IOS','Android'];

function introduce(class1, class2, class3, class4) {
    console.log(`At ${this.name}, we offer claases on ${class1}, ${class2}, ${class3}, and ${class4}.`)
};

introduce.call(school, ...classes);
// or introduce.apply(school, classes);