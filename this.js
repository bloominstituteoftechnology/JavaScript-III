
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object binding must be used with a reference or it is just in //window. 
* 2. Implicit Binding is when a function is called using dot notation, the object to the left of the dot is the /this reference.
* 3. New Binding refers to constructors. This binding refers to the specific instance of what is returned by the constructor.
* 4. Explicit Binding refers to using a binding for call or apply. 
*
* write out a code example of each explanation above
*/

// Principle 1
function Bloodhounds(song){
    let houndbay=song;
    console.log(this);
    return song;

}
Bloodhounds("Ahhwooooo");
// code example for Window Binding

// Principle 2
const dog = {
    greeting: 'Woof, Woof',
    barkHuman: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  dog.barkHuman('Hound');
// code example for Implicit Binding


// Principle 3
const talkLikeADog = bark => {
    bark.talkLikeADog = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  
  const me = { name: 'LilyAnne' };
  const you = { name: 'Whimsy' };
  talkLikeADog(me);
  talkLikeADog(you);

// code example for New Binding

// Principle 4
function GreatDane(giantBreed) {
    this.name = giantBreed.name;
  }

// code example for Explicit Binding