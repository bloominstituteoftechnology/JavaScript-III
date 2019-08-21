/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
* 2. implicit binding
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
 
  }
console.log(sayName("joshua"));
  

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      return(`${this.greeting} my name is ${name}`);
      
    }
  };
 console.log( myObj.sayHello('mud'));
  

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
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
    return `hello my name is ${this.name}.`;
    };
  }
  
  const josh = new Person({
    age:25,
    name:'Josh',
    homeTown:'Salt Lake City',
  });

  console.log(josh); console.log(josh.speak());