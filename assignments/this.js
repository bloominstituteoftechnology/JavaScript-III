/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global Binding 
* 2. Implicit Binding 
* 3. Explicit Binding 
* 4. New Binding
* 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const bird = {
  type: "Red Robin",
  chirp: function () {
    return `CHIRP CHRIP, I'M A ${this.type.toUpperCase()}`
  }
}

console.log(bird.chirp())


// Principle 3

// code example for New Binding

function Car (make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}

const myCar = new Car('Toyota', 'Camry', 2008)

console.log(`${myCar.year} ${myCar.make} ${myCar.model}`)

// Principle 4

// code example for Explicit Binding

function addColorProp (color) {
  this.color = color
}

const element = {
  type: 'p'
}

addColorProp.call(element, 'blue')

console.log(element.color)
