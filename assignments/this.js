/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding -
*    The 'this' keyword is checking for what is left of the dot
*    of the invokation. In this instance, it is referencing the user object
*
* 2. Explicit Binding - 
*    The invokation in this case would be the 'call' keyword. You would pass
*    in arguments into the invokation, one by one in order. Or, if in the
*    case of an array, you could use the 'apply' keyword, to pass in an array
*    and have it seperate it for you. You can also create a new function 
*    the 'bind' keyword to use a later time, which is essentially the same
*    as the 'call' keyword, with the added functionality.
*
* 3. New Binding -
*    The 'new' keyword will create a new object and label it as
*    the 'this' keyword.
*
* 4. Window Binding -
*    The 'window' keyword is essentially a default labeling to the
*    the 'this' keyword, so that if none of the parameters are met
*    for the other bindings, it'll revert to this one..
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.age = 21

function sayAge () {
  console.log(`My age is ${this.age}`)
};

// Principle 2

// code example for Implicit Binding

const user = {
  name: 'Christian',
  age: 21,
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

user.greet();

// Principle 3

// code example for New Binding

function weapon (name, damage) {

  this.name = name
  this.damage = damage
};

const sword = new weapon('fireblade', 56);

// Principle 4

// code example for Explicit Binding

function greet (l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  );
}

const person = {
  name: 'Christian',
  age: 21,
}

const languages = ['HTML', 'CSS', 'JavaScript']

greet.call(person, languages[0], languages[1], languages[2]);