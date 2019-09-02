/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global object binding. In the browser "this" will be bound to the window object, while in node, "this" will be bound to the global object.
* 2. Implicit binding, "this" is the object before the dot and called function.
* 3. New keword binding, "this" refers to the instance of an object returned by a constructor function.
* 4. Explicit binding, uses the js call and apply methods to pass the value of "this" to another. 
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
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');



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
keyword (Function Methods!)

const personInfo = {
  'name': 'Bob'
}

const skills = ['HTML', 'CSS', 'JS'];
const moreSkills = [' more HTML', 'CSS', 'JS'];


function introduce(skills1, skills2, skills3){
  console.log(`Hello!  My name is: ${this.name} and I like to program in: ${skills1}, ${skills2}, ${skills3}`)
}

introduce.call(personInfo, ...skills);

Or use .apply(array) or .bind(save as new var);