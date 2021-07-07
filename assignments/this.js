/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: the value 'This' refers to the window or global object.
* 2. Implicit binding: Inside a function the object before the dot is this
* 3. New binding: When you use a constructor function this will refer to the object created and return with the constructor function 
* 4. Explicit Binding: Whenever you use a call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var windowBinding = () => console.log(this);

windowBinding();

// Principle 2

// code example for Implicit Binding

const greetings = {
      sayHello: function(name) {
          console.log(`Hello my name is ${name}`);
          console.log(this);
      }
  }

  greetings.sayHello('Luis');

// Principle 3

// code example for New Binding

function Parent(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.yabbaDabba = function() {
      return 'Yabba dabba doo!';
    };
  }
  
  Parent.prototype.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
  
  const fred = new Parent({
    gender:'Male', 
    age: 35, 
    name: 'Fred', 
    homeTown: 'Bedrock'
  });
  
  const wilma = new Parent({
    gender:'Female', 
    age: 37, 
    name: 'Wilma', 
    homeTown: 'Bedrock'
  });
  
  console.log(fred);
  console.log(fred.speak());
  console.log(wilma);
  console.log(wilma.speak());

// Principle 4

// code example for Explicit Binding

function Child(childAttributes) {
    Parent.call(this, childAttributes); // binding to Parent
    this.isChild = childAttributes.isChild; // a special attribute to Child
  }
