/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When "this" has not been defined in a local scope it will take the global meaning of "this."
* 2. When we invoke a method via dot notation, the "this" keyword refers to the Object before the dot.
* 3. When creating objects from a constructor function with the keyword "new", the "this" keyword refers to the specific object created and extracted from the constructor function.
* 4. When using ".apply()" or ".call()" we will be explicitly binding "this."
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dayOfTheWeek(date) {
    console.log(this)
}
dayOfTheWeek("Wednesday");


// Principle 2

// code example for Implicit Binding
const food = {
    name: "Cheeseburger",
    ingredients: ["Cheese", " Meat", " Lettuce", " Bacon"],
    howToMake: function() {
        console.log(`A ${this.name} has ${this.ingredients}`);
    }
}

food.howToMake();

// Principle 3

// code example for New Binding
function BestJSFramework(framework) {
    this.framework = framework;
    this.end = "is the best framework, period!"
    this.iAmBest = function() {
        console.log(`${this.framework} ${this.end}`)
    }
}

const angular = new BestJSFramework("Angular");
const react = new BestJSFramework("React");

angular.iAmBest();
react.iAmBest();

// Principle 4

// code example for Explicit Binding
const city = {
    name: "New York City"
  }
  
  const neighborhoods = ["Upper West Side", "East Village", "Lower Manhattan"];
  
function neighborhoodsInCity(neighborhoods) {
     console.log(`${neighborhoods} are located in ${this.name}`);
    }

  neighborhoodsInCity.call(city, neighborhoods);