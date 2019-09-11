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

function sayFood(food){
    console.log(this);
    return food;
}

sayFood("food");

// Principle 2

// code example for Implicit Binding

const dinner = {
    battleCry: 'Die',
    Shout: function(name) {
      console.log(`${this.battleCry} for my name is ${name}`);
      console.log(this);
    }
  };
  dinner.Shout('Peanut Allergy');
  


// Principle 3

// code example for New Binding


function GrumpyPerson(greeter) {
    this.greeting = 'Go Away';
    this.greeter = greeter;
    this.yell = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const Potatos = new GrumpyPerson('Potato Bob');
  const Spuderson = new GrumpyPerson('SpudmcSpuderson');
  
  Potatos.yell();
  Spuderson.yell();


// Principle 4

// code example for Explicit Binding

Potatos.yell.call(Bob); Spuderson.yell.apply(Spudmc);