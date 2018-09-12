/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: If this is declared on a global scope it is bound to the window it is being run in.
* 2. Implicit Binding: If this is used to envoke a function with dot notation it is inplicitly bound.
* 3. New Binding: When the operator New is used to create a new instance from a constructor function the this keyword is bound to the function.  
* 4. Explicit Binding: When .call(), .apply() or .bind() are used on a function this is explicitly bound to that function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBound(){
    return this;
}
console.log(windowBound());


// Principle 2

// code example for Implicit Binding
const user = {
    name: 'Brad',
    age: 32,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
user.greet();

// Principle 3

// code example for New Binding

function UserFunc (name, age) {  
    this.name = name
    this.age = age
  }
  
  const me = new UserFunc('Biff', 76);

  console.log(me);
// Principle 4

// code example for Explicit Binding

function greet () {
    console.log(`Hello, my name is ${this.name}`);
  }
  
const user1 = {
    name: 'James',
    age: 47,
}
greet.call(user1);