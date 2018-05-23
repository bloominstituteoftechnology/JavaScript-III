/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding means that "this" will referer to the default window object
* 2. Implicit Binding means that "this" will refer to the object that is left of the invocation. 
* 3. New binding means you can create new objects and child objects and "this" will refer to each. 
* 4. Explicit binding means that we can use call(), apply() and bind() to explicitly call "this"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const speakName = function () {
    console.log(this.name);
}

const speak = {
    name: "Daniel"
}

speakName(); //?

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'Daniel',
    age: 33,
    speak: function () {
        return this.name;
    }
}

person.speak(); //?

// Principle 3

// code example for New Binding
const Pizza = function (topping, sauce) {
    this.topping = topping;
    this.sauce = sauce;
};

const pepperoni = new Pizza('Pepperoni', 'Tomato');

pepperoni.topping; //?


// Principle 4

// code example for Explicit Binding
const sayName = function () {
    return 'My name is ' + this.name;
}

const daniel = {
    name: 'Daniel',
    age: 33
}

sayName.call(daniel); //?


//Initial Pull Request 