/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when you do not explicitly set a binding to the this keyword, but instead call it on a global level, it will default to the window object... that is the Window Binding principle
* 2. when you call a method on an object, providing the objects name before dot notaion, i.e. hobbit.cook(), the this keyword is bound to that object to the left of the period...that is the Implicit Binding principle
* 3. when you have used a constructor object and utilize the 'new' keyword to create a new instance of that 'masterprint' object, this is bound to the newly created object...that is the New Binding principle
* 4. when you use the .call and .apply methods to an object to bind this...that is the Explicit Binding principle
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function helloWorld(){
    console.log(this);    
}
// console.log(helloWorld());


// Principle 2

// code example for Implicit Binding
const person = {
    name: "John Doe",
    occupation: "Accountant",
    car: "Audi",
    speak: function(){
        console.log(`Hello, my name is ${this.name} and I drive my ${this.car} to my job as an ${this.occupation} every work day`);      
    }
}
person.speak();


// Principle 3

// code example for New Binding
function Fighter(style, weightClass, begin){
    this.style = style;
    this.begin = begin;
    this.weightClass = weightClass;
    this.startFight = function(){
        console.log(`The ${this. weightClass} ${this.style} fighter ${this.begin}s to their opponent`)
    }; 
}

const Jack = new Fighter("Muy Thai", "Heavy Weight", "nod");
const Hugh = new Fighter("Karate", "Feather Weight", "bow");

Jack.startFight();
Hugh.startFight();


// Principle 4

// code example for Explicit Binding

const animal = {
    species: "dog",
    color: "brown"
}

const likes = ['walks', 'playing ball', 'treats']

function listAnimalsLikes(like1, like2, like3) {
    console.log(`This ${this.species} likes ${like1}, ${like2}, and ${like3}`);    
}
// listAnimalsLikes.apply(animal, likes)
listAnimalsLikes.call(animal, ...likes)