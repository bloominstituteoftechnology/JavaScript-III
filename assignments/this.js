/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:  Keyword 'this' bound to the window object or global scope.

* 2. Implicit Binding: Keyword 'this' autmoatically bound to the object to the left of the function in which it's invoked.

* 3. Explicit Binding: Keyword 'this' bound to an object using the function methods .call(), .apply(), or .bind().

* 4. New Binding:  Keyword 'this' bound to an object when constructed using a constructor function and the 'new' keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello() {
    console.log(this);
}

sayHello();

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Dan',
    food: 'steak',
    speak: function() {
        console.log(`Hi I'm ${this.name} and I like to eat ${this.food}`)
    }
}

person.speak();

// Principle 3

// code example for Explicit Binding
const human = {
    name: "Marissa",
    writing: 'dissertation'
}

function write() {
    console.log(`Hello my name is ${this.name} and I'm writing my ${this.writing}`);
}

write.call(human);

// Principle 4

// code example for New Binding
function Coder(person) {
    this.name = person;
    this.language = 'JavaScript';
    this.speak = function() {
        console.log(`I'm ${this.name} and I like to code in ${this.language}`);
    }
}

const dave = new Coder('Dave');
dave.speak();