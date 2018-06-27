/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window / global binding:
    The *this* pointer will refer to the window object, which will result in something being undefined or a big error.

* 2. implicit binding:
    Using *this* directly on an object.

* 3. new binding:
    *This* refers to a specific instance of an object (made by a constructor function).

* 4. explicit binding:
    Using function methods (.call, .apply, .bind) to bind this to a function.

* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const windowTimesTwo = function () { return this * 2; };

// Principle 2
// code example for Implicit Binding
const obj = {
    myKey: 'My value',
    myFunc: function() { return `${this.myKey} is my value.`; }
};
console.log(obj.myFunc());

// Principle 3
// code example for New Binding
const Winner = function (phrase, name) {
    this.congrats = 'Congrats!';
    this.phrase = phrase;
    this.name = name;
    this.congratulations = function() {
        return `${this.congrats} ${this.phrase} You've won, ${this.name}. :D`;
    }
};

let phrase1 = "You've defeated the evil minotaur when no one else could! Thank you.";
let phrase2 = "You defeated the evil minotaur when someone else already did! Thanks.";

const harry = new Winner(phrase1, 'Harry');
const larry = new Winner(phrase2, 'Larry');

console.log(harry.congratulations());
console.log(larry.congratulations());

// Principle 4
// code example for Explicit Binding
const LastWinner = function (name) {
    let phrase = "You've defeated the evil minotaur! That was the last of them. Don't bother searching for more.";
    Winner.call(this, phrase, name);
};

const gary = new LastWinner('Gary');

console.log(gary.congratulations());