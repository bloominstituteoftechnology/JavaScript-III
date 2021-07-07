/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Reuse functions
* 2. Allows you to choose focal object
* 3. Clear scope
* 4. Scale objects
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayAge () {
    console.log(`My age is ${this.age}`)
  }
  
  const windowUser = {
    name: 'Tyler',
    age: 27
  }
  console.log(sayAge())
  // comes out undefined. 

// Principle 2
// code example for Implicit Binding
const user = {
    name: 'Mr. Implicit',
    age: 124,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
user.greet()

// Principle 3
// code example for New Binding
function mrUser (name, age) {
    this.name = name
    this.age = age
}
const userNew = new mrUser('Mr. New', 24)
console.log(userNew)


// Principle 4
// code example for Explicit Binding
function greet() {
    console.log(`Hello, my name is ${this.name}`)
}
const userExplicit = {
    name: 'Mr. Explicit',
    age: 99,
}
greet.call(userExplicit)