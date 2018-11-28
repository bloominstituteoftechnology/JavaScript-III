/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - Always points to the window object if no strict parameter is set...default is window object.
* 2. Implicit - Looks to the left of the method invocation?
* 3. Explicit - When .call(), .apply(), or .bind() are used on a function.
* 4. New - creates an instance of a user-defined object
*
* write out a code example of each explanation above
*/

// Principle 1
 function greeting() {
   console.log(this);
 }

// greeting();

// Principle 2

const dog = {
    breed: 'Pit-Bull',
    food: 'Pedigree',
    bark: function() {
      console.log(`My ${this.breed} ate a whole bag of ${this.food}`);
    }
  }

  dog.bark();
// Principle 3

const Dog = {
    name: 'Juno'
  }
  const skills = ['Play', 'Sit', 'Shake'];
  
  function sayHello(skills1, skills2, skills3) {
    console.log(`Hello! My name is ${this.name}, and I can ${skills1}, ${skills2}, ${skills3}`);
  }

  sayHello.call(Dog, 'Play, Sit Shake');
  sayHello.apply(Dog, skills);
  sayHello.bind(Dog,...skills);
// Principle 4

function Person(programmer){
    this.programmer = programmer;
    this.greeting = 'How are you today';
    this.speak = function() {
      console.log(`${this.greeting}, ${this.programmer}`)
    }
  }
  
  const billy = new Person('Billy');

  
  console.log(billy);
  
  billy.speak();
  