/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - references the window object - this is "the whole forest."
* 2. Implicit Binding - this refers to the odject before the dot when a function is called.
* 3. New binding - this refers to the object created using the construcor function.
* 4. Explicit binding - this is defined by using the apply or call method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function test1() {
    console.log(this);
  }
  
  test1();


// Principle 2

// code example for Implicit Binding

const students = {
    boys: 7,
    girls: 9,
    both: function() {
      console.log(this.boys + this.girls);
    }
  }

  students.both();


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding



