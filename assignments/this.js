/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. explcit- when we have to explicitly define inheritance
* 2. implicit- when we are working in the same object, we can use this 
* 3. window- refers to when we want this to have the value of the global object.
* 4. New Binding- When we use a constructor function, this refers to whatever object we are creating and it's returned with the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

//Display an alert box after 5 second (5000 miliseconds)
setTimeout(function(){ alert(“Welcome Guest”); }, 5000;)

// Principle 2

// code example for Implicit Binding

const MichaelSkills = {
  greeting: "Michael Says Hello",

  sayHello: function() {
    console.log(`${this.greeting} to everyone`);
  }
};

//Principle 3

function ClassesEnrolled(info) {
  this.otherclasses = info.otherclasses;
  this.hasPassedMath = info.hasPassedMath;
  this.tellHasPassedMath = function() {
    console.log(this.hasPassedMath + "this is the status");
  };
}

function Student(setup) {
  ClassesEnrolled.call(this, setup), (this.name = setup.name);
  this.gpa = setup.gpa;

  this.tellGpa = function() {
    console.log(this.name + " Grade point average is" + this.gpa);
  };
}

const Michael = new Student({
  name: "Michael Trew",
  gpa: 3.7,
  otherClasses: "History, Art",
  hasPassedMath: "Yes"
});

console.log(Michael.tellGpa());

console.log(Michael.tellHasPassedMath());

// Principle 4

// code example for Explicit Binding
// line 39 would be the example of explicit binding.

console.log(Michael.hasPassedMath);
