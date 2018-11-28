/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW Binding - if developer doesn't have a specific use of the "this" keyword it will
                      point at the window object.

* 2. IMPLICIT Binding - happens automatically. Whenever a function is called by a preceding 
                        dot, the object left of the dot gets "this". Always attached to an Object.

* 3. EXPLICIT Binding - the developer explicitly tells the "this" keyword what to point too.

* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function greeting() {
    console.log(this);
}
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

const skills = ["Shooting", "Wrangling", "Acting"];
// code example for New Binding

// Principle 4

// code example for Explicit Binding