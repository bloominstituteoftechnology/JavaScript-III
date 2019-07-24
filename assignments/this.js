/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Object Global .this will refer to the window/console object in global scope
* 2. Implicit Binding: You can call the object directly to the left of the dot in object literals
* 3. New Binding: You invoke a function with the word "new" followed by object name, .this will refer to the new constructed object
* 4. Explicit Binding: You can explicitly state what .this is referring to in any function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function animal(species){
    console.log(this)
    return species;
}
console.log(animal("dog"));

// Principle 2

// code example for Implicit Binding
const person = {
    name: "Gurpreet",
    age: 33,
    location: "SF",
    hobby: function (){
        return `${this.name} enjoys living in ${this.location}`
    }
}
console.log(person.hobby());

// Principle 3
function Person(info){
    this.name = info.name;
    this.age = info.age;
    this.speak = function () {
        return `I am ${this.age} years old`
    } 
}
const Gurpreet = new Person ({
    name: "Gurpreet",
    age: 33
})
console.log(Gurpreet.speak())
// code example for New Binding

// Principle 4
// code example for Explicit Binding

const sayName = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
};

const tania = {
    name: 'Gurpreet'
};

const languages = ['English', 'French', 'Russian'];

console.log(sayName.apply(Gurpreet, languages));