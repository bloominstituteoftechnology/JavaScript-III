/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding is when we don't have any specific use ot the 'this' key word,
     it will always point back to the window.  

* 2. Implicit Binding or automatic binding is whenver we invoke a function it looks for the word in the left of the dot as the this key word.

* 3. New Binding is building a new object using a constructor function.

* 4. Explicit Binding is the opposite of Implicit binding it means we control and force the this key word by using call, bind and apply Methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding :
function sayHello (){
    console.log (this);
} 
sayHello();

// Principle 2

// code example for Implicit Binding

const person = {
    name : 'Moe',
    age : 99,
    saySomething : function (){
        console.log (`Hello world my name is ${this.name} and my age is ${this.age} years old`)
    }
}
// person is the this key word.
person.saySomething();

// Principle 3

// code example for New Binding

function Player (play) {
    this.name = play;
    this.sayHi = 'hello';
    this.speak = function(){
      console.log(`${this.sayHi} ${this.name}`)
    }
  
    }
  
    const greet = new Player ('Tom Brady');
    console.log(greet);
    greet.speak();

// Principle 4

// code example for Explicit Binding

const Feedback = {
    name : 'alex',
    feed1 : 'athletic',
    feed2 : 'strong'
}
const sports = ['Basketball', 'football', 'soccer'];

const giveFeedback = function(sports1, sports2){
    console.log (`${this.name} is ${this.feed1} and ${this.feed2} he also likes to play ${sports1}, and ${sports2}`)
}
giveFeedback.apply(Feedback, sports);