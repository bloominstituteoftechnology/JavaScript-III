/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: This principle is what happens automatically when the 'this' keyword is refrenced.
    When determining what the 'this' keyword is refrencing under this principle, we look to the function invocation.
    The object to the left of the dot in the invocation is what the 'this' keyword is referencing.
     
* 2. Explicit Binding: This is when the 'this' keyword is told what to reference, using the .call, .apply, or .bind moethods.
     The first parameter you pass into these methods is where the 'this' keyword will point to.

* 3. New Binding: This principle says that when a function is called using the new keyword, the 'this' keyword in that 
     function is pointing to that function. 

* 4. Window Binding: This is the principle apllied when a function is invoked without dot notation, .call, .apply, .bind
     or the new keyword. Without those methods or keyword, the 'this' keyword points to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

this.animal = "Cow";

function whatAnimal(animal) {
  console.log(this.animal)
}

whatAnimal("Chicken"); // Output will still be "Cow" because there is no binding attached to the invocation, so 'this' points to the window object.


// Principle 2
// code example for Implicit Binding
const Animal = {
    'name': 'Spot',
    'species': 'Dog',
    'speak': function (animalNoise) {
        console.log(`${this.name} the ${this.species} says ${animalNoise}!`);
    }
}

Animal.speak("woof");

// Principle 3
// code example for New Binding

function myFruit(fruit) {
    this.action = 'eat';
    this.aFruit = fruit;
    this.sentence = function () {
        console.log(`I like to ${this.action} ${this.aFruit}!`);
    }
}

const me = new myFruit('cherries');

me.sentence();

// Principle 4
// code example for Explicit Binding

const tree = {
  'type': 'Pine Tree',
  'age': 70
}

const attributes = ['tall', 'green', 'sappy'];

function treeInfo(attribute1, attribute2, attribute3 ) {
    console.log(`This tree is a ${this.type} and it is ${attribute1}, ${attribute2}, and ${attribute3}.`);
}

treeInfo.apply(tree, attributes);
