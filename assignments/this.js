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

// Principle 1

// code example for Window Binding
function x() {
    console.log(this);

}

x();

// Principle 2

// code example for Implicit Binding

const person = {
  firstName: 'john',
  lastName: 'duo',
  fun: function(){
    console.log(this.firstName);
  }
}

person.fun();

// Principle 3

// code example for New Binding

function person2(talk){
  this.x = talk;
}

let newPerson = new person2('I am a new person');

console.log(newPerson.x); // function is being invoked


// Principle 4

// code example for Explicit Binding
function any (){
  console.log(this.firstName);
}
let newAny = {
  firstName : 'Avi',
  lastName : 'Kandinov'
}
something = any.bind(newAny);
something();
