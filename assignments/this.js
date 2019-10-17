/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global scope is the base level of execution context of JavaScript, and it is not inside a function. Here, "this" refers to the window, the global object JS creates.
* 2. Implicit binding: Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New binding: When a constructor function creates an object, "this" refers to the specific instance of the object.
* 4. Explicit binding: Whenever you use call or apply in JS, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function greeting() {
    console.log("Hi!");
 }
 
 this.greeting();

// Principle 2

const a = {
    greeting: 'Hi',
    sayHello: function(name) {
      console.log(`${this.greeting}, my name is ${name}`);  //Here, this refers to "const a" and lives in the scope of a
    }
  };

  a.sayHello('Slim Shady');

// Principle 3

  function b(person) {
      this.intro = 'Welcome ';
      this.person = person;
      this.dialogue = function() {
          console.log(this.intro + this.person);
      };
  }

  const tim = new b('Tim');
  const tom = new b('Tom');

  tim.dialogue();
  tom.dialogue();

// Principle 4

tim.dialogue.call(tom);
tom.dialogue.apply(tim);