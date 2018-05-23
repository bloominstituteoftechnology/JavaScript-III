/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    return name;
}
console.log(sayName("Austin"));
// Principle 2
// code example for Implicit Binding
const Obj = {
    greeting: 'Hello',
    sayHello: function(name){
        return `${this.greeting} my name is ${name}`;
    }
}
console.log(Obj.sayHello("Austin"));

// Principle 3

// code example for New Binding
function Formal(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function(){
        return (this.greeting + " " + this.greeter);
    }
}

const costco = new Formal('Austin');
console.log(costco.speak());
// Principle 4

// code example for Explicit Binding

let person = {
    name: 'Bill',
    age: 49,
};

let sayFoods = function(food1,food2,food3){
    console.log(`My name is ${this.name} and I like to eat ${food1}, ${food2}, ${food3}`);
}

let foods = ['apples', 'bananas', 'pears'];

sayFoods.apply(person, foods);