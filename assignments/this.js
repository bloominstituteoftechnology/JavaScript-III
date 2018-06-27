/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. WINDOW: `this`'s default binding in Chrome, for example.  The window is the uber-object beneath which
    everything else lives.

* 2. IMPLICIT: When calling on an ojbect's method with dot-notaion any `this`'s interpolated or otherwise
    used in the object method's body refer to the name of the object itself.

* 3. NEW: Requires a constructor function.  The `new` keyword instructs the `this`'s in the
    constructor function's body to point at key:value's in the new object.

* 4. EXPLICIT: .call, .apply and .bind are built in methods that act on objects.  They
    redirect the biding of `this` in various ways.  We call their implementation explicit
    binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.example = "yo yo yo";

function windowBinding(example) {
    console.log(this.example);
}

windowBinding('Hi');

// Principle 2

// code example for Implicit Binding

const newObject = {
    'firstkey': 'a thing',
    'sayAThing': function(name) {
        console.log(`${this.firstkey} is what i'm trying to ${this.name}`);
    }
}

console.log(newObject.sayAThing("do"));

// Principle 3

// code example for New Binding

function NotSoCordialPerson(greeter) {
    // new === this 
    this.greeting = "Go f*** yourself";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const son = new NotSoCordialPerson('Dad');
  const dad = new NotSoCordialPerson('Son');
  
  son.speak();
  dad.speak();

// Principle 4

// code example for Explicit Binding

const myObject = {
  'name': 'Jim',
  'age': 30
}

const skills = ['HTML','CSS','JS'];

function sayName(skill1, skill2, skill3) {
  console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
}

sayName.call(myObject, skills[0], skills[1], skills[2]);