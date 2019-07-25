/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding



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


