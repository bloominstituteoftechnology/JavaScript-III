// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Context or Window Binding - the value of 'this' will be the console object. The whole JS language!

* 2. Implicit Binding - when using a dot syntax, the object on the left side of the dot is 'this'.

 3. New Binding/Constructor functions - a reusable blueprint of what the object is. All constructors return an object.

4. Explicit Binding - we use functions to .bind, .apply or .call properties and attach it to a function. 

// *
// * write out a code example of each explanation above
// */

// // Principle 1

// // code example for Window Binding
console.log(this);


// Principle 2

code example for Implicit Binding
const myName = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} My name is ${name}.`);
        console.log(this);
    }
};
myName.sayHello('Sara');

// Principle 3

// code example for New Binding
function Kids(playtime) {
    this.playtime = playtime;
    this.when = function() {
        return `The kids will play at ${this.playtime}`;
    };
}
const time = new Kids ('noon');
console.log(time.when());


// // Principle 4

// // code example for Explicit Binding
function Produce(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Produce.call(this, name, price);
    this.category ='food';
    console.log(`${this.name} for ${this.price}`);
};

console.log(new Food('cherries', 2).name);
console.log(new Food('lettuce', 1).price);