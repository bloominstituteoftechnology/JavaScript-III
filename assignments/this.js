/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 

Window/global: in the absence of any other principle taking preference, 'this' will default to pointing at the window/global object.

* 2. 

Implicit: any time 'this' is being called in object method, 'this' will point to the object itself and see if any of its properties match the request.

* 3. 

New: any time the 'new' keyword is used, 'this' will point to the properties of the new instance created.

* 4. 

Explicit: any time .call(), .apply(), or .bind() are used, the 'this' context is manually set. 

*
* write out a code example of each explanation above
*/

// Principle 1

this.name = 'hello world'
console.log(this.name)

// Principle 2

const obj = {
  name: 'name',
  speak: function() { console.log(this.name) }
}

obj.speak()

// Principle 3

function Obj(name) {
  this.name = name
  this.speak = function() { console.log(`Hello, my name is ${this.name}`) }
}

const newObj = new Obj('brain')
newObj.speak()

// Principle 4

newObj.speak.call(obj)