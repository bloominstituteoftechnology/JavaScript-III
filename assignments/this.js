/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - Left of the dot at call time.
* 2. Explicit Binding - Call, Apply, Bind. We pass "this" as an argument.
* 3. New Binding - Function invoked with new keyword. "this" keyword is bound to new object being constructed.
* 4. Window Binding - Default of "this" is the window object
*
* write out a code example of each explanation above
*/

// Principle 1 - Implicit Binding

const me = {
    name: "Ben Masterson",
    speak: function() {
        console.log(`Hello, my name is ${this.name}.`)
    }
}

me.speak();

// Principle 2 - Explicit Binding
var languages = ["JavaScript", "Ruby", "Python"]
var sayName = function() { 
    console.log(`My name is ${this.name}`) 
}
var sayNamePlusLang = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, ${lang3}.`)
}
var ben = {
    name: 'Ben',
    age: 30
}
sayName.call(ben)
sayNamePlusLang.apply(ben, languages)
var newFunction = sayNamePlusLang.bind(ben, ...languages)
newFunction()
// Principle 3 - New Binding
var Animal = function(color, name, type) {
    this.color = color
    this.name = name
    this.type = type
}

var sheep = new Animal('Black', 'Harry', 'Sheep')

// Principle 4 - Window Binding

var sayAge = function() {
    console.log(this.age);
}

sayAge() // undefined