/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/ global binding - will bind from the global scope, defined outside the function
* 2. implicit binding - by using the this. keyword, other instances of an object inherit the properties.
* 3. new binding - once the constructor is done, I can now make new objects from it.
* 4. explicit binding - by using call, bind and apply, I can take all paramaters from the previous constructor functions that I've made.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayHi (n){
    console.log (`Hi ${this}`) 
}
// code example for Window Binding
 
// Principle 2
function Car (specs ){
    this.year = specs.year;
    this.make = specs.make;
    this.model = specs.model;
    this.color = specs.color

}
// code example for Implicit Binding

// Principle 3

// code example for New Binding
const corvette = new Car ({
    year:1988,
    make:'Chevy',
    model: 'corvette',
    color: 'red'

})
Car.prototype.start = function(){
    console.log(`${this.model} goes vroom vroom!`)
  }
// Principle 4

// code example for Explicit Binding
function Truck(truckSpecs){
    Car.call(this, truckSpecs);

}
Truck.prototype = Object.create(Car.prototype)

const bronco = new Truck({
    make:'Ford',
    model:'Bronco'
  })
  console.log(bronco.make, bronco.model.toUpperCase())
  bronco.start()

  // the new   truck also inherits the start method.