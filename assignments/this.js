/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the
value of ${this} inside that function will be the window object.

* 2. Implicit binding occurs when dot notation is used to invoke a function

* 3. Constructor functions return an object. A constructor function 
is used in object oriented programming with the keyword "new" in New Binding

* 4. When a function is called through the call() or apply() methods
you are using explicit binding. What call() (or apply()) does is explicitly 
tell the function what object to use as this.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    console.log("Hello " + name);
    console.log(this);
}

greetMe("Jane");

//greetMe("Jane"); == window.greetMe("Jane");
//------

// Principle 2

// code example for Implicit Binding

let MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  obj.doStuff('awesome'); 
  // prints 'MyObjectName is awesome!'

//In implicit binding, whatever is to the left of the dot becomes the context for this in the function. //


// Principle 3

// code example for New Binding
function Person(greeter) {
  this.greeting = 'Bonjour';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const claude = new CordialPerson('Pierre');
const Pierre = new CordialPerson('Claude');

Pierre.speak();
Pierre.speak();

// Second Example because I want to know if they are both correct //

function home(country, state, city) {
  this.country = country;
  this.state = state;
  this.city = city;
}

let location = new home ("United States", "Kentucky", "Louisville");

console.log(location.state);


// Principle 4

// code example for Explicit Binding

function greet (l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Myasia',
  age: 27,
}

const languages = ['JavaScript', 'HTML', 'CSS']

greet.call(user, languages[0], languages[1], languages[2])