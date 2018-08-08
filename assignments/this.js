/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - Implicit binding refers to when you are invoking a function. What is to the left of the dot when invoking a function is what "this" will be referring to.


* 2. Window Binding - Window binding refers to when the "this" keyword isn't specified. When you invoke a function that uses "this" but don't have anything to the left, or are using any methods, the "this" keyword will default to undefined.


* 3. New Binding - When invoking with a "new" keyword, JavaScript will create a new object where the "this" keyword is bound to the NEW object being made.  


* 4. Explicit Binding (.call, .apply, .bind) - Literally refers to when we explicitly state what the "this" keyword is.


*
* write out a code example of each explanation above
*/

// Principle 1
const sayName = function() {
    console.log(`Hello I am ${this.name}`);
};

const myself = {
    'name': 'Jonathan'
};

sayName(); // invoked but "this" wasn't given anything to assign itself to
// code example for Window Binding






// Principle 2
const objectOne = {
    'name': 'Jonathan',
    'workout': function(excercise1, excercise2) {
        console.log(`${this.name} loves to ${excercise1} and ${excercise2}`);
    }
};

objectOne.workout('run', 'swim');
// code example for Implicit Binding






// Principle 3
const Character = function(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
};

const humanClass = new Character('Zoron', 22, 'Human');
console.log(humanClass);
// code example for New Binding






// Principle 4
const greetUser = function() {
    console.log(`Welcome back ${this.name}`);
};

const userOne = {
    'name': 'user2145'
};

greetUser.call(userOne);
// code example for Explicit Binding