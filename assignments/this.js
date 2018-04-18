/* Wladimir Fraga */
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this is the reference to the main window global object
* 2. Everything before the dot is the implicit of this for an object
* 3. When we create a new instance of an object with a prototype
* 4. When you make a call to a metod with an object like a parameter
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function whereAmI(where, cb) {
    console.log(this);
    return where;
  }
  whereAmI("D'Artagnan", 'inside');

// Principle 2

// code example for Implicit Binding

const dog = {
    sound: 'Barks',
    bark: function(message) {
      console.log(`${message} ${this.sound}`);
      console.log(this);
    }
  };

  dog.bark('My dog');

// Principle 3

// code example for New Binding

function Pet(kind, sound) {
    this.kind = kind;
    this.sound = sound;
    this.description = function() {
      console.log(`The ${this.kind} ${this.sound}s`);
      console.log(this);
    };
  }
  
  const myDog = new Pet('Dog','Bark');
  const myCat = new Pet('Cat','Meow');
  
myDog.description();
myCat.description();


// Principle 4

// code example for Explicit Binding

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Instrument(name, price) {
    Product.call(this, name, price);
    this.category = 'instrument';
  }
  
  console.log(new Instrument('Guitar', 500));
  