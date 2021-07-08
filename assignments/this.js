/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
1. Implicit Binding:
Implicit binding describes a situation where it's essentially *implied* that 'this' references the object the invocation is acting on.

2. Explicit Binding
Explicit binding describes a situation where you use 'call' on a function to tell it explicitly what context in which 'this' is referenced. 

3. New Binding
The 'new' keyword tells the function to create a new object, and that new object is what 'this' will reference.

4. window Binding
If none of the other rules are met, then JavaScript will default the this keyword to reference the window object.
*


* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
window.age = 27;

function sayAge () {
  console.log(`Andrew's age is ${this.age}`)
}
////

// Principle 2
// code example for Implicit Binding
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }  
  user.greet()
////


// Principle 3
// code example for New Binding
function User (name, age) {
    this.name = name
    this.age = age
  }

const me = new User('Andrew', 27);
//

// Principle 4
// code example for Explicit Binding
function greet () {
    alert(`Hello, my name is ${this.name}`)
  }
  
const user = {
    name: 'Tyler',
    age: 27,
}

greet.call(user);
//