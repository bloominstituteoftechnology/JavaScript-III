/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. so there is window binding which is refering to "this" as being used in a global scope.
* 2. okay implicit binding is the case scenario when you have an object and inside that object you referance a function the "this." before the function is refering to the object specifically.
* 3.a new binding refers to "this" being used inside of a constructor function which causes "this" to target the resulting object from that function. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function mathWords(words) {
    console.log(this);
    return words;
  }
  mathWords("Geometry, Addition");
// Principle 2
const myObj = {
    clothes: 'shirt',
    talkClothes: function(name) {
      console.log(`i love ${name}s new ${this.clothes}`);
      console.log(this);
    }
  };
  myObj.talkClothes('Ryan');
// code example for Implicit Binding

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  newman.speak();
// Principle 4

// code example for Explicit Binding
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  