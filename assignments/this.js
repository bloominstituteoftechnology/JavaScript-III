/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when in global scope "this" would be the window/console object - according to toolkit
* 2. Implicit Binding - function called by preceding dot. Object before dot is "this"
* 3. New Binding - refers the the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding - when call or apply is used then "this" is explicitely defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayLastName(last) {
    console.log(this);
    return last;
  }
  sayLastName("Helms");

// Principle 2

// code example for Implicit Binding

const easilyOffended = {
    offended: 'What did you mean by that,',
    sayHello: function(name) {
      console.log(`${this.offended} ${name}? Sounds like a microaggression to me...bigot`);
      console.log(this);
    }
  };
  easilyOffended.sayHello('Christian');

// Principle 3

// code example for New Binding

function MeanPerson(person) {
    this.meanThing = 'Screw you, ';
    this.person = person;
    this.speak = function() {
      console.log(this.meanThing + this.person);
      console.log(this);
    };
  }
  
  const christian = new MeanPerson('Christian');
  const josh = new MeanPerson('Josh');
  
  christian.speak();
  josh.speak();

// Principle 4

// code example for Explicit Binding
christian.speak.call(josh);
josh.speak.apply(christian);

//For reference