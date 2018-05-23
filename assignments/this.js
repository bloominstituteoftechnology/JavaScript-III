/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If "this" is used in the global scope, it will refer to the DOM Window object by default. This is called Window Binding
* 2. When a function is called by attaching the function name with a dot to an object, the object before the dot is "this". This is called Implicit Binding. 
* 3. When a new object of a constructor function is created, "this" refers to the new instance(object) of the constructor function. This is called New Binding. The word new is used to create an object of the constructor function.
* 4. When call or apply methods are used on functions,"this" is defined explicitly. This is called Explicit Binding.
*
* write out a code example of each explanation above
*/

//Principle 1

// code example for Window Binding

function greetFunction(greet) {
   console.log(this.greet);
   return greet;
 }
greetFunction("Hi");


// Principle 2

// code example for Implicit Binding
const myNewObj = {
  name: 'Harry',
  greeting: function(greet) {
    console.log(`${this.name} greets you ${greet}`);
    console.log(this);
  }
};

myNewObj.greetFunction('Hello');


// Principle 3

// code example for New Binding

function newCar(model) {
  this.year = 1975;
  this.location = 'USA'
  this.info = function(model) {
    console.log(this.model +"is from "+this.year);
    console.log(this);
  };
}

const BMW = new newCar('BMW');
const audi = new newCar('Audi');

audi.info();
honda.info();


// Principle 4

// code example for Explicit Binding
function State(stateattributes){
  Country.call(this, stateattributes);     //State inherits all the properties from Country
  this.population = stateattributes.population;
  this.area = stateattributes.area;
}
