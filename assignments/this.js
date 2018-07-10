/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: this is sort of the default. It's value will be the window or console Object.
* 2. Implicit Binding: the .this keyword references whatever is left of the dot when function is invoked. This is used most of the time.
* 3. New Binding: whenever the .this keyword is envoked, it references a constructor function to get a new object value.
* 4. Explicit Binding: You use .call or .apply to reference .this on a method or function on a global scope. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayNameFour(name) {
    'use strict'; //this is what Tyler does to get undefined.
    console.log(this);
    return name;
}

console.log(sayNameFour("D'Artagnan"));

// another example

let sayAge = function () {
    return ('this.age');
};

let myAge = {
    age: 35,
}

console.log(sayAge());
// window.age = 35;
// console.log(sayAge());

// Principle 2

// code example for Implicit Binding

let me = {
    name: 'Bryce',
    age: 35,
    sayName: function () {
        return `${this.name}`;
    }
}

console.log(me.sayName());

// another example
let sayNameMixin = function(obj) {
    obj.sayNameTwo = function() {
        return `${this.name}`;
    }
}

let you = {
    name: 'Rachel',
    age: 25,
}

let him = {
    name: 'Steve',
    age: 21,
}

sayNameMixin(you);
sayNameMixin(him);

console.log(you.sayNameTwo());
console.log(him.sayNameTwo());

// Principle 3

// code example for New Binding

let Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

let zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra);


// Principle 4

// code example for Explicit Binding

let sayNameThree = function (lang1, lang2, lang3) {
    return ('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3 + '.');
};

let stacey = {
    name: 'Stacey',
    age: 34,
};

let languages = ['HTML', 'CSS', 'JS'];

console.log(sayNameThree.call(stacey, languages[0], languages[1], languages[2]));

console.log(sayNameThree.apply(stacey, languages));

let newFn = sayNameThree.bind(stacey, languages[0], languages[1], languages[2]);

console.log(newFn());