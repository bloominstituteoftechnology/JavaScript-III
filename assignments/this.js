/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding (most common) = whatever is to the left of the dot becomes the context for the this function
* 2. Explicit binding = tells a function what the context of the this. keyword will be by using call, apply and bind
* 3. New binding = when you invoke a function with the new keyword. The keyword is bound to the object being constructed
* 4. Window binding = if none of the other three apply, the this. keyword will default to the window object unless you're in strict mode (in which case you'll get undefined or an error)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayAge = function() {
    console.log(this.age);
}

const myExample = {
    age: 25
};

sayAge();

// This will return undefined or an error in strict mode

window.age = 35;
sayAge();

// We then set age = 35 to the window. It will now output 35



// Principle 2

// code example for Implicit Binding

const sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    };
};

const me = {
    name: "Tyler",
    age: 25
};

const you = {
    name: "Joey",
    age: 21
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();

// The this keyword is to the left of the dot when we invoke sayName. I.e. in this example it's me or you



// Principle 3

// code example for New Binding

const Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type 
};

const zebra = new Animal('black and white', 'Zorro', 'Zebra');

console.log(zebra)

// JavaScript is creating a brand new object called zebra and saving the Animal constructor function. The new object provides the info for .this

// Principle 4

// code example for Explicit Binding

const sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2} and ${lang3}.`)
}

const stacey = {
    name: 'Stacey',
    age: 34
};

const languages = ['JavaScript', 'Ruby', 'Python'];
const newFunc = sayName.bind(stacey, languages[0], languages[1], languages[2]);
newFunc();