/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit what ever is left of the dot when fuction is invloked,
* 2. Explicit - when explicitly bind this using bind, apply and call
* 3. new binding - Class
* 4. winodws binding - window global object
*
* write out a code example of each explanation above
*/

// Principle 1 code example for Window Binding
const calculateAge = function (age) {
  console.log(this)
  // this refers to the global window/Console Object since there is no context defined
  return age
}

calculateAge(35)

// Principle 2 code example for Implicit Binding
const me = {
  greetings: 'Hello, my name is',
  name: 'Arega',
  age: 42,
  sayName: function () {
    console.log(`${this.greetings}, ${this.name}`)
    console.log(this)
    // this here refers to the me object
  }
}
me.sayName()

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
