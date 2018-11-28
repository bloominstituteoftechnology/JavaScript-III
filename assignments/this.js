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
      console.log(`${this.name} ate a whole bag of ${this.food}`);
    }
  }

  dog(bark);
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding