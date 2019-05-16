/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is really just 'this' pointing to nothing, or rather pointing to the window or console object.
* 2. Implicit binding is a like pointing to the object left of a dot that you use. You're binding to that object.
* 3. New binding uses a constructor function to set the model for what instances of that class should look like.
* 4. Explicit binding uses .call(), .apply(), and .bind() to help functions point to a specific object.
*
* write out a code example of each explanation above
*/

// Principle 1

function hey() {
    return `Hey watch: ${this}`;
}

// console.log(hey());

// Principle 2

const chris = {
    name: 'chris',
    age: 23,
    favoriteFood: 'pizza',
    sayAge: function() {
        return `Hey everyone, I'm ${this.age} years old!`;
    }
}

// console.log(chris.sayAge());

// Principle 3

function Person(name, age, location) {
    this.name = name,
    this.age = age,
    this.location = location,
    this.speak = function() {
        return `Hey, my name is ${this.name}.`;
    }
}

const chrisP = new Person('Chris', 23, 'Los Angeles');
const brandonP = new Person('Brandon', 18, 'Los Angeles');

// Principle 4

function sayName() {
    return `Hey, my name is ${this.name}`;
}

// console.log(brandonP.speak.call(chrisP));