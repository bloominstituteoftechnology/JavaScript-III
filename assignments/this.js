/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding- This is the default browser and refers to how this is the global context whenever a function is invoked without the other rules such as .call, .apply, .bind
* 2. Implicit Binding- Whenever a function is call before by a preceding dot.  the object before the dot is the THIS.
* 3. Explicit Binding- When you use the call or apply method, you are using Explicit.
* 4. New Binding-  This is described as the speficic moment that the object is created and returnd  by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function TruthOrDare(guess) {
    console.log(this);
    return (guess)

}

// Principle 2

// code example for Implicit Binding

const GameTime = {

    playerTag: "ShootFirst",
    introPhrase: function(name) {
        console.log(`${this.playerTag} "I came to bring the pain" ${name}`)
        console.log(this)
    }
};
GameTime.introPhrase("Johnson");


// Principle 3

// code example for New Binding

function Xmen(character) {
    this.intro = "Welcome ";
    this.character = character;
    this.speak = function() {
        console.log(this.intro + this.character );
        console.log(this);
        };
    }


const Wolverine = new Xmen('Wolverine');

Wolverine.speak();


// Principle 4

// code example for Explicit Binding

function Music(dance) {
    this.style = dance.style;
    this.alias = dance.alias;
    this.area = dance.area;
    this.speak = function () {
        return `WELCOME TO THE STAGE ${this.style} ${this.alias} ${this.area}`;
    };
}

const artistProfile = new Music ({
    style: "hip hop Sensation",
    alias: "Johnny Rage!!!",
    area: " from the streets of LA"

})

console.log(artistProfile); console.log(artistProfile.speak()); 
