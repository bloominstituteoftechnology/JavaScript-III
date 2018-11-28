/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global Object This Binding. This is basically when "this" is in the main level of the code. Also called global scope.
* 2. Implicit This Binding is where an object is calling a function. For example `person.wakeUp()` person would be the "this".
* 3. Object insantiation or New Object This Binding. This is when a constructor function is declared and another variable is declared as a "new" 
version of the constructor function. The constructor function's job is to build whatever variable instantiates a new version of it. "This" would be
the new Object that is created upon declaration.
* 4. Explicit This Binding is where you use object prototype functions to bind "this" to an object/function. The meaning of this principle is in the name,
where you are "Explicitly" binding "this" to a provided Object. This can be done with Object methods such as .bind(), .call(), and .apply()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function multiply(a, b) {
    console.log(this);
    return a * b;
}
multiply(2, 4);

// Principle 2

// code example for Implicit Binding

let cat = {
    noise: 'Meow',
    speak: function(name) {
        console.log(`${name} goes ${this.noise}`);
        console.log(this); //Logs this object
    }
}
cat.speak('Cat');

// Principle 3

// code example for New Binding
function Animal(species, noise) {
    this.species = species;
    this.noise = noise;
    this.speak = function(){
        console.log(`${this.species} goes ${this.noise}`);
        console.log(this);//Logs this object
    }
}

const fox = new Animal('Fox', 'Fraka-kaka-kaka-kaka-kow');
const cow =  new Animal('Cow', 'Mooooo');

fox.speak();
cow.speak();

// Principle 4

// code example for Explicit Binding

function BabyAnimal(species, noise, age) {
    Animal.call(this, species, noise); //BabyAnimal function is calling Animal() binding it to itself. 
    this.age = age;                    //Basically combining Animal object into itself.
}

const duck = new BabyAnimal('Duck', 'Quack', '1');
duck.speak();