/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If you dont have this in an object than its scope is global/window
* 2. this refers to the . (obj) before it
* 3. When used with a constructor it refers to the new object
* 4. explicit - 
*
* write out a code example of each explanation above
*/

// Principle 1

// // code example for Window Binding
function example (){
    console.log(this)
}

// // Principle 2

// // code example for Implicit Binding



// Principle 3

// code example for New Binding

function Person(obj) {
    this.name = obj.name;
    thids.age = obj.age;
    this.speak = function() {
      console.log(`This is new binding`,this);
      return `Hello my name is ${this.name} and i am ${this.age} years old`;
    }
  }

  const robert = new Person({name: 'robert', age: 29});

// Principle 4

// code example for Explicit Binding