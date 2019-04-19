/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW Binding - if developer doesn't have a specific use of the "this" keyword it will
                      point at the window object.

* 2. IMPLICIT Binding - happens automatically. Whenever a function is called by a preceding 
                        dot, the object left of the dot gets "this". Always attached to an Object in JS.

* 3. EXPLICIT Binding - the developer explicitly tells the "this" keyword what to point too.

* 4. NEW Binding - Whenever a constructor function is used, "this" refers to the specific instance of the object
                   that is created and returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1
function greeting() {
    console.log(this);
}
// greeting();
// code example for Window Binding - above

// Principle 2
const superhero = {
    name: "Spiderman",
    skill: "Shoots a web, any size.",
    career: function() {
        console.log(`${this.name} ${this.name}, does whatever a spider can. ${this.skill} Catches thieves just like flies.`);
    }
}
superhero.career();
// code example for Implicit Binding - above

// Principle 3
const person = {
    name: "Duke"
}

const skills = ["Shooting", " Wrangling", " Acting"];

function introduce(skills1, skills2, skills3) {
    console.log(`Howdy partner! My name is ${this.name}, and I like ${skills1} ${skills2} ${skills3}.`);
}
introduce.call(person, skills); // calls all elements in array as one. - can use spread operator (...skills) to seperate or spread elements
// Apply seperates the values into an array
introduce.apply(person, skills);
//Bind is "use this later" - works like call - can use spread operator (...skills) as with .call
const useLater = introduce.bind(person, skills);
useLater();
// code example for Explicit Binding - above

// Principle 4
function RudePerson(greeter) {
    this.greeter = greeter;
    this.greeting1 = "What are you looking at";
    this.greeting2 = "You are pretty ugly";
    this.speak = function() {
        console.log(`${this.greeting1}, ${this.greeter}`);
    }
    this.speak2 = function() {
        console.log(`${this.greeting2}, ${this.greeter}`);
    }
}

const Buddy = new RudePerson("dude");
const Dude = new RudePerson("buddy")
Buddy.speak(); 
Dude.speak2();
// code example for New Binding - above