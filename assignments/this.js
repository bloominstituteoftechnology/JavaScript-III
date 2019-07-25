/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - When this "this" keyword is called in the global scope, and is not bound to anything specific, it is considered Window Bound.
* 2. Implicit - To the left! With implicit bindins you can always look to the left of the dot (.) when a method is called.
* 3. New Binding - When invoking a new object with the "this" keyword, that is considered a new binding.
* 4. Explicit - Just like it sounds, when you explicitly give the this keyword a value, that is considered explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
basic = function () {
    console.log(this)
};
basic();

// Principle 2
// code example for Implicit Binding

let implicitMe = {
    name: "Raajn",
    age: 26,
    sport: "Basketball",
    speak: function(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age}. We should play some ${this.sport}.`);
    },
};
implicitMe.speak();

// Principle 3
// code example for New Binding

function Person(obj){
    this.name = obj.name,
    this.age = obj.age,
    this.sport = obj.sport,
    this.speak = function() {
        console.log(`Hi! My name is ${this.name} and I am ${this.age}. We should play some ${this.sport}.`);
    }
};
let olive = new Person ({name: "Olive", age: "6months", sport: "frisbee"});
olive.speak();
// Principle 4
// code example for Explicit Binding

function explicitExample(method){
    console.log(`Here we are using ${method}... The new value is ${this.value}.`);
}

let talk = {
    value: "Open Sesame"
}
let applyArray = ['apply()'];
explicitExample.call(talk, "call()");
explicitExample.apply(talk, applyArray);
let bound = explicitExample.bind(talk, "bind()");
bound();
