/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window Binding: this is just the natural state of this, it is bound to and calls out the entire window
* 2. Implicit Binding: this will bind to the function or object it is being called inside and be bound to the keyword left of the invocation.
* 3. Explicit binding: using call, apply, or bind after the invocation with parameters of this(or the function) and an obj/arr/etc. Kind of shaky on this one.
* 4. New Binding: new allows you to bind this to other objects created by a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

this.name = "Pickle" //changes window name to pickle 

// Principle 2

const lunch = {
    'food': 'apple',
    'utensil': 'fork',
    'drink': 'juice',
    'shout': function(){console.log(`I love ${this.drink}`)},
}

lunch.shout();



// Principle 3

const myObject = {
    'name': 'Jim',
    'age': 30
  }
  
  const skills = ['HTML','CSS','JS'];
  
  function sayName(skill1, skill2, skill3) {
    console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
  }

  sayName.call(myObject, ...skills);


// Principle 4

function CordialPerson(greeter) {
    // new === this 
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  const josh = new CordialPerson('CS 12');
  
  jerry.speak();
  newman.speak();
  josh.speak();

  //josh said we could copy/paste!