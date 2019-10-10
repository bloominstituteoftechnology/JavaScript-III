/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Reginald Alford");

// Principle 2
// code example for Implicit Binding
const sayNameFunc = obj => {
    obj.sayName = function() {
      return `Hello my name is ${this.name}`;
      console.log(this);
    };
  };
  const me = { name: 'Jason' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  console.log(me.sayName());
  console.log(you.sayName());

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
    //   console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
// Principle 4

// code example for Explicit Binding
function greet () {
    alert(`Hello, my name is ${this.name}`)
  }
  
  const user = {
    name: 'Tyler',
    age: 27,
  }

  greet.call(user)