/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding
* 2. Implicit Binding is the most common kind of OOP. Whatever method is being called on what precedes the dot is the object.
* 3. New Binding is where we use constructors to create new Objects. 'This' then refers to the new Object information, not the constructor.
* 4. Explicit Binding uses .call and .apply to directly invoke and can override what is set using the implicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
  console.log(this)
  return name
}
sayName("Wanda")

// Principle 2

const greetThem = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}!`)
    console.log(this)
  }
};
greetThem.sayHello('Wanda')

// Principle 3

function Person(greeter) {
  this.greeting = 'Hello'
  this.greeter = greeter
  this.speak = function() {
    console.log(`${this.greeting}, ${this.greeter}.`)
    console.log(this)
  }
}

const claude = new Person('Claude')
const karen = new Person('Karen')

claude.speak()
karen.speak()
// Principle 4

//using new Binding code

claude.speak.call(karen)
karen.speak.call(claude)