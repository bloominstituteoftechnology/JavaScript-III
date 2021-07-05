/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle of this involves the global object scope. When just using the keyword this on it's own, it will always assume you mean the global scope of the program/window.
* 2. The second principle involves using the keyword this in the context of a function within an object. This is called Implicit Binding.
* 3. When used in the context of a constructer function the this keyword refers to the specific object that is being created by the constructer. This is called the New binding since it is creating something new.
* 4. When using the call or apply methods it grabs any this keywords that were defined in the called upon object. Allowing you to change what they are set to. This is called Explicit Binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function wBinding() {
      console.log(this);
    }
    wBinding();

// Principle 2

// code example for Implicit Binding

const perosn = {
    name: 'Billy',
    age: 25,
    getAge: function() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }

// Principle 3

// code example for New Binding

function NewUser(user){
    this.user = user;
    this.id = '1';
    this.speak = function() {
      console.log(`Hi I'm ${this.user} and I am the number ${this.id} User!`)
    }
  }

  const billy = new NewUser('Billy');

  console.log(billy);
  billy.speak();

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Billy'
  }
  
  const pets = ['cat', 'dog', 'hamster', 'snake', 'shark'];
  
  function introduce(pets) {
    console.log(`Hi! My name is ${this.name}, and I have ${pets.length} pets! I have a ${pets}!`);
  }

  introduce.call(person, pets);