/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding -- is when the `this` has no declared binding to it, which in this case would be the window
* 2. New binding -- is when a new instance of the object is created and binded
* 3. implicit binding -- is when an object is created and it has implied values like in example below
* 4. explicit binding -- is methods such as below example .apply, .call, and .bind are used explicitly binding the object to a another object 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function doesSomething() {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding

let truck = {
    make : 'Chevy',
    model: 'Silverado',
    type: 'Pick-up',
}

// Principle 3

// code example for New Binding
function Vehicle(obj) {
    // this = {};
      this.make = obj.make;
      this.model = obj.model;
      this.isAwesome = true;
      this.vroom = function() {
        console.log(`This ${this.make} goes vrrroooommm baby!`)
      };
    // return this
  };

  let Ford = new Vehicle({
      make: 'Ford',
      model: 'F150',
  });

  Ford.vroom();



// Principle 4

// code example for Explicit Binding
const berto = {
    name: 'Berto'
}
const hobbies = ['Reading', 'Coding', 'Sleeping']
function myHobbies(h1, h2, h3){

 return `My name is ${this.name} and my top three hobbies are ${h1}, ${h2}, ${h3}. What about you?`
}

const bertosHobbies = myHobbies.apply(berto, hobbies)
bertosHobbies; //Run me and I should work