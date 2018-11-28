/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding is when the this keyword is not bound to any object and has no other option but to refer to the window object.
* 2. Implicit binding is when this gets assigned almost automatically you can see it on an object literal,
     if you create a method within an object this refers to the object holding the method.
* 3. New binding is when you use the 'new' keyword to create an object from a constructer function. In this
     case this is bound to the new object created by the constructor.
* 4. Explicit binding is when you use the '.call' or '.apply' method to explicitly tell this what you want to reference
*
* write out a code example of each explanation above
*/

// Principle 1

function globalExample(){
  console.log(this);
}

globalExample();
// Principle 2

const person = {
  name: 'Nick',
  speak: function() {
    console.log(`My name is ${this.name}`);
  }
}

person.speak();

// Principle 3

function Dog(dogAttr){
  this.type = dogAttr.type;
  this.color = dogAttr.color;
  this.barkType = dogAttr.barkType;
  this.woof = function(){
    console.log(this.barkType);
  }
}

let beagle = new Dog({
  type: 'Beagle',
  color: 'White and Brown',
  barkType: 'Bork'
});

beagle.woof();

// Principle 4

const banana = {
  name: 'Banana'
}

const bananaAttr = ['Yellow', 'Ripe'];

function describeFruit(desc1, desc2){
  console.log(`I am a ${this.name} and I am ${desc1} & ${desc2}`);
}

describeFruit.apply(banana, bananaAttr);