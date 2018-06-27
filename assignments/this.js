/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1. Window
- Window is when there is no previously initiated object for the 'this' keyword to reference. With nothing to look to, the 'this' keyword will always default to the highest-order object, which is Window. 
* 2. Implicit
- When an object is initiated, the 'this' keyword automatically defaults to its parent object that is being initiated and refrences those parameters/methods. 
* 3. Explicit
- Explicit allows us to intentionally assign 'this' to an object, using methods inherent in the property of type function, namely .call(), .apply(), and .bind().  
* 4. New
- New creates a new object from an object constructor and allows us to assign this to that newly constructed object. 


* write out a code example of each explanation above
*/

// Principle 1

//In this instance, we can ask, 'this' what? since there is no object for the this to refer to. By default it will refer to the Window object in the browser. 

this.name = "CS 12 window example";

function sayName(name) {
  console.log(this.name);
}

sayName("Josh");

// Principle 2

const myObject = {
    'greeting': 'What up',
    'sayHello': function(name) {
     console.log(`${this.greeting} my name is: ${name}`);
   }
 }
 
 // Whatever is directly left of the invocation is implicitly bound to the this keyword
 myObject.sayHello("Erica");


// Principle 3


const myObject = {
    'name': 'Jim',
    'age': 30
  }
  
  const skills = ['HTML','CSS','JS'];
  
  function sayName(skill1, skill2, skill3) {
    console.log(`My name is: ${this.name} and I like to program using these skills: ${skill1}, ${skill2}, ${skill3} `);
  }
  
  //Call, passes this and parameter
  sayName.call(myObject, skills[0], skills[1], skills[2]);
  sayName.call(myObject, skills);
  sayName.call(myObject, ...skills);
  
  //Apply - Just like call, but it will iterate over each item 
  sayName.apply(myObject, skills);
  
  //Bind - returns a function with same ability of call
  let newFunction = sayName.bind(myObject, skills[0], skills[1], skills[2]);
  newFunction();
  



// Principle 4

function CordialPerson(greeter) {
    // new === this 
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`)
    }
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  const josh = new CordialPerson('CS 12');
  
  jerry.speak();
  newman.speak();
  josh.speak();