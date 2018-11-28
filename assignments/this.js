/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding/Global binding- this points to the whole browser or whole console.
* 2. implicit binding- implied if using method on object. look to the left for our invocation
* 3. New binding- when construction function is used this refers to specific instructions of the object thats created and returned. 
* 4. Explicit binding- when we use or call or apply we are explicitly this is defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);


// Principle 2

// code example for Implicit Binding
const school = {
    name: 'Lambda',
    cook: 'Software Developers',
    learn: function() {
        console.log  (`${this.name} creates ${this.cook}`);
    }
}

school.learn(); 

// Principle 3
// code example for New Binding

function meanFan(yeller){
    this.yeller = yeller;
    this.greeting = 'Texas Sucks!';
    this.speak = function() {
      console.log(`${this.greeting}, ${this.yeller}`)
    }
  }
  
  
  // const jerry = {
  //   name: 'jerry'
  // }
  
  const sam= new meanFan('Marquis');
  const Marquis = new meanFan('Sam');
  
  console.log(sam);
  
  sam.speak();
  Marquis.speak();

// Principle 4

// code example for Explicit Binding 
const person = {
    name: 'Sambo'
}
const hobbies = ['football', 'fantasy sports', 'hiking with my wife'];

function introduce(hobbies){
    "use strict";
    console.log ('Hello my name is ${this.name} and I like ${this.hobbies}');
}