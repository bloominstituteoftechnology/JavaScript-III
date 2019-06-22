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

// Principle 3 code example for New Binding

const Animal = function (color, name, type) {
  this.color = color
  this.name = name
  this.type = type
  this.peek = function () {
    console.log(`${this.color}, ${this.name}, ${this.type}`)
    console.log(this, 'New Binding')
    // this points to the Animal object
  }
}
const zebra = new Animal('black and white', 'Zim', 'Zebra')
const lion = new Animal('brown/tan', 'Zaza', 'Lion')
zebra.peek()
lion.peek()

// console.log(zebra)

// Principle 4 code example for Explicit Binding
const sayName = function () {
  console.log(`My name is ${this.name}`)
  console.log(this)
}

const dina = {
  name: 'Dina',
  age: 39
}
const arega = {
  name: 'Arega',
  age: 42
}

sayName.call(dina)
sayName.apply(arega)
const newFn = sayName.bind(dina)
newFn()
