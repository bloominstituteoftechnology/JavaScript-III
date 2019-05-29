/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when you're in global scope, the window/console object is the value of this
* 2. Implicit Binding - this will point to the object before the dot that precedes a function that is called 
* 3. New Binding - this will refer the object that is created and returned by the constructor function
* 4. Explicit Binding - when using .call or .apply, you explicity define this.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this);


// Principle 2
// code example for Implicit Binding

const patient = {
  name: "Bob",
  age: 25,
  gender: "male",
  symptom: "runny nose",
  toDoctor: function(){
    return `${this.name} is ${this.age} years old, ${this.gender}, and has a ${this.symptom}.`;
  } 
}

console.log(patient.toDoctor());


// Principle 3
// code example for New Binding

function Student(attrs){
  this.name = attrs.name;
  this.age = attrs.age;
  this.movieGenre = attrs.movieGenre;
  this.major = attrs.major;
  this.introduction = function () {
    return `Hello, my name is ${this.name} and I am majoring in ${this.major}.`
  }
}

const jessica = new Student({
  name: "Jessica",
  age: 19,
  movieGenre: "comedy",
  major: "computer science"
})

console.log(jessica);
console.log(jessica.introduction());


// Principle 4
// code example for Explicit Binding

const traveler = {
  "name": "Sabrina"
}

function countriesTraveled(country1, country2, country3){
  return `Hello, my name is ${this.name} and I have traveled to ${country1}, ${country2}, ${country3}.`
}

const countries = ["Australia", "Germany", "Italy"];

console.log(countriesTraveled.call(traveler, ...countries));
console.log(countriesTraveled.call(traveler, "Australia", "Germany", "Japan"))
console.log(countriesTraveled.apply(traveler, countries))