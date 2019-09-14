/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 1. Window
* 2. 	* 2. Implicit
* 3. 	* 3. New Binding
* 4. 	* 4. Explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); //wrong??

function Ryan(DuckLover){
    console.log(this);
    
}
console.log(Ryan('i love ducks'));

// Principle 2
// code example for Implicit Binding
const Implicit = {
    name: "Webster",
    species: "Duck",
    sound: "Quack! Quack! Quack!",
    doesthis: function(){
        return `waddle waddle waddle ${this.sound} and then flew away!`
    }
}
console.log(Implicit.doesthis())

// Principle 3

// code example for New Binding
function Duck(critter) {
    this.sound = 'Quack! ';
    this.animal = Duck;
    this.speak = function() {
      console.log(this.sound + this.animal);
      console.log(this);
    };
  }
  
  const Webster = new Duck('Webster');
  const Ducky = new Duck('Ducky');
  
  Webster.speak();
  Ducky.speak();

// Principle 4

// code example for Explicit Binding
Webster.speak.call(Webster); Ducky.speak.apply(Ducky);