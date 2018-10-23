/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If 'this' is not specifically assigned, it is automatically assigned to the window/global object.  This is known as window binding.
* 2. When 'this' is used in object methods then implicit binding is involved and 'this' is automaticaly assigned to an object when called by a preceding dot. So, by calling the objectName.method() the object name immediately to the left of the dot is the one attached to 'this.  If a long list of objectnames: objectName1.objectName2.objectName3.method() - it is the last dot that is the one that counts.
* 3. When a constructor function is actually used, or instantiated, then a 'new' instance of that object can be said to be made.  In these instances when a new object is constructed, or invoked, the 'this' keyword inside the constructor function above is bound to the new object. 
* 4. When 'this' is involved in constructor functions then Explicit binding is involved.  There are 3 ways to attach 'this' to a constructor function: .bind, .call, and .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myFunction() {
    console.log(this);
    return name;
}

myFunction('Brett Madrid');

// Principle 2

// code example for Implicit Binding
const Chessplayer = {
    name: 'Fabiano',
    whiteOpening: 'Spanish Game',
    blackOpening: 'Sicilian',
    speak: function() {
        console.log(`My name is ${this.name} and my favorite openings are the ${this.whiteOpening} and the ${this.blackOpening}`);
    }
}

Chessplayer.speak();

// Principle 3

// code example for New Binding
const Chessplayer = function(name, whiteOpening, blackOpening) {
    this.name = name;
    this.whiteOpening = whiteOpening;
    this.blackOpening = blackOpening;
    this.speak = function() {
      console.log(`Hello, my name is ${this.name} and my favorite openings are the ${this.whiteOpening} and the ${this.blackOpening}`);
    }
};
// when a new object is constructed, or invoked, as below, the 'this' keyword inside the function above is bound to the new object
const challenger = new Chessplayer('Fabiano Caruana', 'Queens Gambit', 'French Defense');

challenger.speak();


// Principle 4

//code example for Explicit Binding
const musician = {
  name: 'Brett'
}

const skills = ['vocals', 'guitar', 'bass'];
    
 function introduction(skills1, skills2, skills3) {
   console.log(`Hello! My name is ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`);
 }
    
 introduction.apply(musician, skills);