/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when 'this' is in global scope, it refrences the window or console object.
* 2. implicit binding: when object.function is called, 'this' (in the function) refers to the the object preceding the dot.
* 3. new binding: when the 'new' keyword is used to create an instance of an object, 'this' in the constructor funtion refers to that 
    object instance.
* 4. explicit binding: the 'call' and 'apply' methods explicitly state which object 'this' refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalScope() {
    console.log(this);
}

globalScope();

// Principle 2

// code example for Implicit Binding

const mySchool = {
    school: 'Lambda',
    gpa: function(gpa) {
        console.log(`My gpa at ${this.school} is ${gpa}`);
    }
};
mySchool.gpa('4.0');


// Principle 3

// code example for New Binding

function LambdaStudent(studentName, studentAge) {

  this.name = studentName;
  this.age = studentAge;
  this.speak = function() {
    console.log(`${this.name} is ${this.age} years old`);
  };
}

const samarvir = new LambdaStudent('Samarvir', 21);
const sam = new LambdaStudent('Sam', 27);

samarvir.speak();
sam.speak();

// Principle 4

// code example for Explicit Binding

console.log(samarvir);

let skills = ['HTML','CSS','JS'];
  
let sayName = function(skill1, skill2, skill3) {
    console.log(this.name + ' can code in: ' + skill1 + ', ' + skill2 + ', ' + skill3 );
  }
  
let newFunction = sayName.bind(samarvir, ...skills);
  
newFunction();
