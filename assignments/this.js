/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: If you use 'this' and either aren't or forgot to use any of the other three principles this is what happens. In this case looking at any of the properties of 'this' will look at the window properties. 
* 2. Implicit Binding: Most common usage for 'this'. References the object to the left of the dot if you are invoking a function on the right side of the dot
* 3. New Binding: If you have a function that creates an object then 'this' can be used inside the function to reference the function.  Needs the new keyword
* 4. Explicit Binding: '.call()', '.apply()',  or '.bind()' is involved. You specify what this is by passing in properties 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");


// Principle 2

// code example for Implicit Binding
let parent = {
    "name":"Susan", 
  "age": 70,
  "speak":function(){
    return "Hello, my name is "+ this.name +"!"
  },
  "child":{
    "name":"George",
    "age":50,
    "speak":function(){
      return "Hello, my name is "+ this.name +"!"
    },
    "grandchild":{
      "name":"Sam",
      "age":30,
      "speak":function(){
        return "Hello, my name is "+ this.name +"!"
      },
  
    }
  }}
  console.log(parent.child.speak());
// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
    
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding

const sayGreeting = function(){
    console.log(`My name is ${this.name}`)
};

const Fred = {
name:'Fred Armisen '
};

sayGreeting.call(Fred);