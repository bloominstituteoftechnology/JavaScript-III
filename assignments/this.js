/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: defaults to the window object
* 2.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greeting(){
  console.log(this)
}
greeting();
// Principle 2

// code example for Implicit Binding
const student = {
  name: 'Jon',
  age: '26',
  intro: function(){
    console.log(`Hello I'm ${this.name} and I am ${this.age}.`);
  }
}
student.intro();
// Principle 3

// code example for New Binding
function HelloName(name){
  this.greeting = 'Hello';
  this.name = name;
  this.fullgreeting = function(){
    console.log(`${this.greeting} ${this.name}, nice to meet you.`)
  }
}
const Jon = new HelloName('Jon');
console.log(Jon)
// Principle 4

// code example for Explicit Binding
