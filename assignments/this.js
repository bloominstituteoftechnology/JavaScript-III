/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Window binding uses this in the loosest. It is used to describe the window that it is in. In this case it is the web browser object.
* 2. Implicit - Implicit binding is an implied or automatic when there is only one possiblity and it is obvious in context it is an implict instance.
* 3. Explicit - Explicit binding is a more specific instance of :this: because it is not automatic it must be further specified what :this: is refering to.
* 4. Prototyple - Prototyple programming is defiently the most complex of the principles. When using a prototyple instance of :this: involves constructor functions and passing :this: from one object to another using methods and/or functions.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const realMikeKerbleski = {
  'action' : 'stand up',
  'askTheQuestion': function(name) {
  console.log(`will the real ${name} please ${this.action}?`);
  }
}
realMikeKerbleski.askTheQuestion("MikeKerbleski");

// Principle 3

// code example for New Binding

const fakeMikeKerbleski = {
  'action' : 'stand up',
  'name': "Mike Kerbleski"
}

const food = ['steak', "plate full o' bacon", 'rack of ribs'];

function foodIsReady(name) {
  console.log(`will the real ${this.name} please ${this.action}? Your ${food[0]} & ${food[1]} & ${food[2]} is ready.`);
}

foodIsReady.call(fakeMikeKerbleski, ...food)

// Principle 4

// code example for Explicit Binding
function ConstructorFunction(person, plan, ask) {
  this.greeting = "whats up?";
  this.person = person ;
  this.plan = plan;
  this.ask = ask;

  this.speak = function(){
    console.log(`Hey! ${this.person}! ${this.greeting} `)
  };
  this.response = function(){
    console.log(`${this.plan} `)
  };
  this.question = function(){
    console.log(` ${this.ask} `)
  };
}
 const mike = new ConstructorFunction('Ryan', "Im Coding at Lambda School.", "want to go on a hike?" );
 const ryan = new ConstructorFunction('Mike', "Im gonna get drunk, you?", "want to get drunk?");

 mike.speak()
 ryan.response()
 mike.response()
 ryan.question()
 mike.question()
