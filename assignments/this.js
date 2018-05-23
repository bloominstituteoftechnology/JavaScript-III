/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding - when 'this' is used outside of an object it will refer to the window object.
* 2. Implicit Binding - the object that invokes the function is referred to as this.
* 3. New Binding - this refers to the specific iteration built with the constructor function.
* 4. Explicit Binding - Using call or apply makes this apply to the object you're taking information from.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 function helloWorld(hello){
    //console.log(this); This blew up my console.
    return this.hello;
 }
helloWorld('Hello World');

// Principle 2

// code example for Implicit Binding
const computerScientist ={
    name: 'Bob',
    institution: 'Harvard',
    greetWorld: function() {
        console.log(`Hello World I'm ${this.name} from ${this.institution}`)
        console.log(this); //prints out the object and its properties and methods
    }
}
computerScientist.greetWorld();

// Principle 3

// code example for New Binding
function animal(species) {
    this.confirmaton = `I'm a `;
    this.species = species;
    this.speak = function() {
        console.log(this.confirmaton + this.species);
    }
}
const cat = new animal('cat');
const dog = new animal('dog');
const bird = new animal('bird');
cat.speak();
dog.speak();
bird.speak();

// Principle 4

// code example for Explicit Binding

cat.speak.apply(dog); //the cat now thinks it's a dog
