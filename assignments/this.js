/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. the "this" in line 16 will refer to the global
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function seeTourist(name) {
    console.log(this);
    return name;
  }
  seeTourist("Vanesa");

// Principle 2

// code example for Implicit Binding
const myObj = {
    welcome: 'Welcome to DisneyLand',
    enterDisney: function(name) {
      console.log(`${this.welcome}, I hope you finde everything you need ${name}`);
      console.log(this);
    }
  };
  myObj.enterDisney('Vanesa');

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding