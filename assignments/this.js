/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding => the window is the default locator for "this" 
* 2. implicit binding => usually the "this" property has to have a "leftside" which is the context where "this" is looking in an object or variable.  Usually in the local setting within a function or method.
* 3. Explicit binding => in this case of "this" it has to be speicfic on its context for reference before it is invoked.  Usually there is a method or function which has "this" but it has to be paired or "referenced" on something specific to be invoke with methods such as "call" "apply" or "bind"
* 4. NEW => this is a constructor function in which it "constructs" an object using "this" for its arguements
*
* write out a code example of each explanation above
*/
// ********** sorry for just copy pasting from the cirriculum >.<
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
var sayName = function(){
	console.log('My name is ' + this.name);

};

var Greg = {
	name: 'Greg',
	age: 44
};

sayName.call(Greg);