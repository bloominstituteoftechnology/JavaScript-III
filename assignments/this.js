/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - Kind of like the default. "this" is bound to the window/console. We may not actually want to do this.
* 2. Implicit Binding - The function called by the preceeding dot is what "this" is linked to. This is most common.
* 3. Explicit Binding - using .call .apply and .bind -- .apply does much of the same as .call and iterates through arrays -- .bind creates a new function
* 4. New Binding - Using a constructor function. Refers to the specific instance of the object that is created and returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this.name);
    return name;
  }
  sayName("Moonchild");

// Principle 2

const myObj = {
    "greeting": "Hello there",
    "sayHello": function(name) {
      return `${this.greeting} my name is: ${name}`;
    }
  }

  myObj.sayHello("Bill");

// Principle 3

function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
       return (this.greeting + " " +this.greeter)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  
  jerry.speak(); 
  newman.speak();

// Principle 4

let me = {
    name: 'Bill',
    age: 30
  };
  
  let sayName = function(skill1, skill2, skill3) {
    console.log('My name is: ' + this.name + ' I like to program with this stuff: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
  }
  
  let skills = ['HTML','CSS','JS'];

  // CALL
sayName.call(me, skills[0], skills[1], skills[2])


// APPLY 
sayName.apply(me, skills);

// BIND
let newFunction = sayName.bind(me, ...skills);
newFunction();
