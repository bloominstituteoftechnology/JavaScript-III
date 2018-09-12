/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding
* 2. Implicit binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const Person1 = {
    "name": "Pedro",
    "age": 20,
    "lang1": "Spanish",
    "lang2": "English",
    "speak": function(){
        console.log(`${this.name} can speak ${this.lang1} and ${this.lang2}`);
    }
}
Person1.speak();
// code example for Implicit Binding

// Principle 3
function HsTeacher(teacher){
    this.teacher = teacher;
    this.subject = "Biology",
    this.welcome = function(){
        console.log(`Welcome ${this.teacher}! you are officially a ${this.subject} teacher `);
    }
}
const McDermott = new HsTeacher("Andrew McDermott");
const Perez = new HsTeacher("Adrea Perez");
McDermott.welcome();
Perez.welcome();
// code example for New Binding

// Principle 4
const traveler = {
    "name": "Andrew"
}
const places = ["Puerto Rico", "Mexico", "Venezuela", "Cuba", "Switzerland"];

function introduce(place1, place2, place3, place4, place5){ 
    console.log(`Hi! My name is ${this.name} and I have been in places like ${place1}, ${place2}, ${place3}, ${place4}, and ${place5}`);
}
introduce.call(traveler, ...places);
introduce.apply(traveler, places);
// code example for Explicit Binding