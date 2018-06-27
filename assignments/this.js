/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
* 2. implicit binding
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

function speak(words) {
    console.log(this.words);
}
speak('speak these words');

// Principle 2

let me = {
    name: 'Lauren',
    age: 24,
    sayName: function() {
        console.log(this.name);
    }
}
me.sayName();

// Principle 3

let Person = function(name, age) {
    this.name = name;
    this.age = age;
}

let Lauren = new Person('Lauren', 24);

// Principle 4

let sayName = function () {
    console.log(`My name is ${this.name}`)
};

let lauren = {
    name: 'Lauren',
    age: 24
}

sayName.call(lauren);

