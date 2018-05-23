/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global binding is when 'this' is not constrained to any object, will reference the window. 
* 2. When a method is called on an object, the object to the left of the dot is implicitly bound. 
* 3. When the new keyword is used to create an instance of the constructor function and binds from the newly created object. 
* 4. Explicit binding is when the object is passed in as a parameter to the function using call, apply, or bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

printer = function () { console.log(this); 
} 

console.log(printer());



// Principle 2

// code example for Implicit Binding

const object = {
    "greeting": "goodbye",
    "sayGoodbye": function(name) {
      return `${this.greeting} my name is: ${name}`;
    }
  }
  
  // Whatever is directly left of the invocation is implicitly bound to this
  console.log(object.sayGoodbye("Kelley")); 


// Principle 3


function Animal(species, sound) {
    this.species = species;
    this.sound = sound; 
}

const Ty = new Animal("dog", "bark")

console.log(Ty.species)


// code example for New Binding

// Principle 4

let me = {
    name: 'Kelley',
    age: 33
  };
  
  let sayFoods = function(food1, food2, food3) {
    console.log('My name is: ' + this.name + ' I like to eat this stuff: ' + food1 + ', ' + food2 + ', ' + food3 );
  }
  
  let foods = ['sushi','pizza','iceCream'];
  
  sayFoods.call(me, ...foods);



// code example for Explicit Binding