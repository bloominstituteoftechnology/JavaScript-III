/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

this.name = 'hello world'
console.log(this.name)

// Principle 2

const obj = {
  name: 'name',
  speak: () => console.log(this.name)
}

obj.speak()

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding