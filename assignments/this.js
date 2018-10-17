/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -- default binding of the this keyword to the window or DOM, the biggest element in the browser.
* 2. Implicit Binding -- imply this winthin an object to the object itself. or this reffereing to the block of code the this keyword iis in.
* 3. Explicit Binding -- asigning the value of this to an object using .call .apply and .bind
* 4. new Binding -- binding to a new object within a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function world(){
  "use strict"
  console.log(this)
}

world();
// Principle 2

// code example for Implicit Binding
const obj = {
      name: 'someThing',
      food: 'apple',
      find: function(){
        console.log(`${this.name} found ${this.food}.`);
      }
    }
    
    obj.find();
// Principle 3 new

function Man(name){
    this.name = name;
    this.weapon = 'Fists';
    this.speak = function(){
      console.log(`He uses his ${this.weapon}. They call him ${this.name}.`);
    }
  }
  
  const joe = new Man('Stray Dog');
  const Reinhardt = new Man('German Power');
  
  joe.speak();
  Reinhardt.speak();

// Principle 4  explicit

const person = {
      name: 'Arnold'
    }
    
    const food = ['Bannan', 'slurpie', 'chocolate'];
    
    function announce(skills1, skills2, skills3){
      "use strict"
      console.log(`Hello!  My name is ${this.name} and this is what i ate. ${skills1}, ${skills2}, ${skills3}.`)
    }
    announce.call(person, food[0], food[1], food[2]);
    announce.apply(person, food);
    announce.bind(person, food);