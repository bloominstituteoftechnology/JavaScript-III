/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding refers to how "this" is the global context whenever a function is invoked without 
     any of these other rules. If we aren't using dot notation and we aren't using call(), apply(), 
     or bind(), our "this" will be our global object.


* 2. Implicit binding occurs when dot notation is used to invoke a function.


* 3. New binding when "this" is used in a constructor function.

* 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// In web browsers, the window object is also the global object:
function myFunction() {
  return this;} 
console.log(myFunction());

// Principle 2

// code example for Implicit Binding
 let superhero = {
  name: 'Superman',
  speak: function(){
    return `I am ${this.name}!`
  }
}

console.log(superhero.speak());

function newFunction() {
  console.log(this);
}

// Principle 3

// code example for New Binding
function User(obj) {
    this.firstName = obj.firstName;
    this.saysHi = function(person) {
      return `${this.firstName} says hi to ${person}!`
    };
  }
    let Rob = new User({
      firstName: 'Rob',
    })

    console.log(Rob.saysHi('Lilleigh'));

    

// Principle 4

// code example for Explicit Binding
function User(obj) {
  this.firstName = obj.firstName;
  this.saysHi = function(person) {
    return `${this.firstName} says hi to ${person}!`
  };
}

function Childuser(objChild) {
  User.call(this,objChild);}

let Phil = new Childuser({
  firstName: 'Phil',
})

console.log(Phil.saysHi('Frank'))