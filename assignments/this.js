/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is what happens when this is not explicitly defined. If there is not definition found for it
the default is to bind it to the Window which is basicly everything. 

* 2. Implicit Binding is a pretty obvious one. The object called before the dot will be defined as this. 

* 3. New Binding like the name suggests uses the new keyword when calling the function. As soon as the function is called the function
will create and bind.

* 4. Explicit binding happens when we us the .call or .apply methods. Either of these will explicily bind this.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi(name) {
    console.log(this);
    return name;
}

sayHi("Kyle");

// Principle 2

// code example for Implicit Binding
const anObj = {
    firstName: 'Kyle',
    sayHello: fucntion(name) {
        console.log(`${greeting} my name is ${firstName}`);
        console.log(this);
    }
}
anObj.sayHello('Welcome');

// Principle 3

// code example for New Binding
function animalSound(sound) {
    this.animal = 'Dog ';
    this.sound = sound;
    this.speak = function() {
      console.log(this.animal + this.sound);
      console.log(this);
    };
  }
  
  const puppy = new animalSound('Woof!');
  
  
  puppy.speak();
 

// Principle 4

// code example for Explicit Binding
puppy.speak.call(cat);