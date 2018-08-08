/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if not provided context, will always point at the window.
* 2. the main keypoint of the implicit binding rule. In order to figure out what the this keyword is referencing, first, look to the left of the dot when the function is invoked. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greet () {
    console.log(`Hello, my name is ${this.name}`)
  }
  
  const user3 = {
    name: 'David',
    age: 20,
  }

  greet();


// Principle 2

// code example for Implicit Binding

const user = {
    name: 'David',
    age: 20,
    greet() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }

  user.greet()

// Principle 3

// code example for New Binding

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  var car1 = new Car('Mustang', 'GT', 2018);
  
  console.log(car1.make);

  
// Principle 4

// code example for Explicit Binding

function greet () {
    console.log(`Hello, my name is ${this.name}`)
  }
  
  const user2 = {
    name: 'David',
    age: 20,
  }

  greet.call(user2)