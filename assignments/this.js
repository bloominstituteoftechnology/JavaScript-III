/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding means the global env or the topmost env
* 2. Implicit binding is used within a function so assign ```this``` to point to the local scope
* 3. The new keyword creates a new instance of the object
* 4. Explicit binding is when we use the .call and .apply methods to override a ```this``` binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const speak = (utterance) => {
    console.log(this);
    return speak;
};

speak("Kevin");

// Principle 2

// code example for Implicit Binding

const kevin = {
    meaning: 42,
    life: function (name) {
        console.log(`The meaning of life, ${name}, is ${this.meaning}`)
    }
};
kevin.life("George");

// Principle 3

// code example for New Binding

function NewMath(number) {
    this.number = number;
    this.constant = 42;
    this.sum = function () {
        console.log(this.number + this.constant);
    };
}

const mine = new NewMath(22);
mine.sum();

// Principle 4

// code example for Explicit Binding

function horse (...params) {console.log(`My name is ${this.name} and I ride ${params}.`)};

const user = {
    name: 'Kevin',
    height: '6ft 2 inches',
};

const breeds = ['American Saddlebreds', ' Walking Horses', ' Quarter Horses'];
horse.apply(user, breeds);