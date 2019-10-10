/* The for principles of "this"
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding
 * 2. Implicit Binding
 * 3. New Binding
 * 4. Explicit  Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1
console.log(this)
    // code example for Window Binding

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`)
        console.log(this)
    }
}
myObj.sayHello('Ryan')

// Principle 3

// code example for New Binding
function PersonGreeter(greeter) {
    this.greeting = 'Hello '
    this.greeter = greeter
    this.speak = function() {
        console.log(this.greeting + this.greeter)
        console.log(this)
    }
}

const lan = new PersonGreeter('lan')
const keisha = new PersonGreeter('keisha')

lan.speak()
keisha.speak()
    // Principle 4

// code example for Explicit Binding
function Person(obj) {
    this.name = obj.name
    this.age = obj.age
    this.speak = function() {
        console.log(this.name + ' ' + this.age)
    }
}
const peter = new Person({ name: 'Peter', age: 60 })
const samuel = new Person({ name: 'samuel', age: 40 })
samuel.speak.call(peter)
peter.speak.apply(samuel)