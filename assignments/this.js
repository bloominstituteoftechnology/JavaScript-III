/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding references the global scope, which by default will by the window/console object if not specified further.
* 2. implicit binding applies to object directly to the left of the keyword on the far right.  Important to keep track of what that object is.
* 3. explicit binding uses call, apply, and bind on an invoked function to return specific data points or create a new function to contain them.
* 4. new binding uses a constructor function to create a new object for which 'this' is then bound to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
species = 'Velociraptor'

let saySpecies = function(){
    return this.species;
};

saySpecies(); //?
saySpecies('Tyrannosaurus'); //?

// Principle 2
// code example for Implicit Binding
const mcDonalds = {
    "order": "Double cheeseburger",
    "finishOrder": function(name) {
      return `My name is ${name}, and I would like a ${this.order}.`;
    }
  }
  mcDonalds.finishOrder("Michael"); //?

// Principle 3
// code example for New Binding

function strugglingStudent(student) {
    this.chastise = "Get it together! " + this.student;
    this.student = student;
    this.apologize = "...sorry for taking that tone with you, " + this.student + ".";
    this.yell = function() {
       return (this.chastise + " " + this.student + this.apologize)
    }
  }
  const Michael = new strugglingStudent('Michael');
  const Josh = new strugglingStudent('Josh');
  
  
Michael.yell(); //?
Josh.yell(); //?
  

// Principle 4
// code example for Explicit Binding
let sayName = function(skill1, skill2){
    console.log('Hi! My name is ' + this.name + ' ' + this.lastName, "and I'm an expert at " + skill1 + ' and ' + skill2 + '.');
};

let norm = {
    name: 'Norm',
    lastName: 'MacDonald'
};

let skills = ['Comedy', 'Storytelling']

sayName.call(norm, ...skills);