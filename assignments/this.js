/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default binding in Javascript (unless you use strict mode). This means that this will refer
to the window, e.g. console.log(this) ---> displays window object in browser console.
* 2. Implicit Binding is binding to the object on the left of the dot in an invocation of a method or
referring to a key.
* 3. New Binding occurs when we create instance of a class; the object created and returned by constructor
 is 'this'.
* 4. Explicit binding is when the .call() or .apply() method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this) //will return window object in console


// Principle 2

// code example for Implicit Binding

const dog = {
  name: 'Spot',
  breed:'beagle',
  greeting: function(){return `${this.name} the ${this.breed} says 'woof'.`}

}

console.log(dog.greeting());   //dog is 'this'



// Principle 3

// code example for New Binding

function Dog(attrs){
  this.name = attrs.name;
  this.breed = attrs.breed;
  //this is the object created when this constructor is invoked
}

const newDog = new Dog({name:'Spot', breed: 'beagle'});

console.log(`The dog's name is ${newDog.name} and he is a ${newDog.breed}.`);
    //newDog is 'this', since it is the object created when the Dog constructor was invoked.

// Principle 4

// code example for Explicit Binding

var dogSaysHi = dog.greeting.bind(dog);

//here, .bind ensures dogSaysHi is always bound to const dog, so 'this' is 'dog'.
