/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when 'this' is used in the global scope, it will be a console Object
* 2. Implicit Binding - when a function is called by a preceding dot, the object before that dot is 'this'
* 3. New Binding - when a constructor function is used, 'this' refers to the instance of the object that is returned by the function
* 4. Explicit Binding - when call or apply methods are used, 'this' becomes explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
function sayHi (n){
    console.log (`Hi ${this}`) 
} // code example for Window Binding

// Principle 2
function Car (specs ){
    this.year = specs.year;
    this.make = specs.make;
    this.model = specs.model;
    this.color = specs.color

} // code example for Implicit Binding

// Principle 3
const corvette = new Car ({
    year:1988,
    make:'Chevy',
    model: 'corvette',
    color: 'red'

})
Car.prototype.start = function(){
    console.log(`${this.model} goes vroom vroom!`)
  } // code example for New Binding

// Principle 4
function Truck(truckSpecs){
    Car.call(this, truckSpecs);

}
Truck.prototype = Object.create(Car.prototype)

const bronco = new Truck({
    make:'Ford',
    model:'Bronco'
  })
  console.log(bronco.make, bronco.model.toUpperCase())
  bronco.start() // code example for Explicit Binding