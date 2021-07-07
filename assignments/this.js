/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/
// all Examples here are from josh

// Principle 1

// code example for Window Binding
this.whatUp = "Yo what up son";

function sayHello(whatUp) {
  console.log(this.whatUp)
}

sayHello("whatUp"); 


// Principle 2

// code example for Implicit Binding
const myObj = {
    'name': 'Michael',
    'age': 24,
    'instruments': function(fiddle1, fiddle2) {
      console.log( `${this.name} can play ${fiddle1} and ${fiddle2} and i'm good at it. I have about ${this.age} years of experience!`);
    }
  }
  myObj.instruments("Guitar", "Drums");

// Principle 3

// code example for New Binding

function Teacher(greeter) {
    this.greeting = "I don't understand this";
    this.greeter = greeter;
    this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`);
    }
  }
  
  const Zack = new Teacher('Zack');
  const Josh = new Teacher('Josh');
  const Mom = new Teacher('Mom');
  
  Zack.speak();
  Josh.speak();
  Mom.speak();

// Principle 4

// code example for Explicit Binding

const student = {
    'name': 'Michael',
    'age': 24
  }
  
  const skills = ['HELP', 'ME', 'UNDERSTAND'];
  
  function introduce(skill1, skill2, skill3) {
    console.log(`My Name is ${this.name} and I like to program in: ${skill1} , ${skill2} , ${skill3}`);
  }
  
  // introduce.call(student, skills);
  introduce.apply(student, skills);
  // let holdOn = introduce.bind(student, ...skills);
  // holdOn();
  // introduce(...skills); <--- i would like to talk about what is going on with this. 