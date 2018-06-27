/* The for principles of "this";
first of all this allows you to reuse functions in different contexts, allowing you to decide which object should be
focal. So this is a method of foacl objects, which is very generally a problem solving technique typically used to brainstorm the
potential uses of a focal object by expirmenting its interaction with another typically randomly generated object by examining their
mutual characteristics. You can test these various contexts in javasccript any number of ways but one illuminating example would be
 forced-context invokers such as the .call() and .appply() methods.
 In laymans terms 'this' simply allows one to use functions and methods in different contexts and/or with different objects.
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: This is like explicit binding without the methods and implciit within the dots, you ask  javasccript
to reference the window object which is the most global object that everything has access to, so to invoke a function on this objects
using this, you have to add whatever you want to refernce by the function to the window property, but you have to be careful not to change any defaults.
Also if you use strict mode it will not refrence the window object because apparently you aren't supposed to refrecne the window object.
* 1. Implicit Binding: For this type of binding to key to understandin what 'this' is referecning within the fucniton scope
is to look *left* of the dot when the function is invoked and the object to the left of the dot is the object being referenced by
this. It is important to note the heirarchy of each object when examining this, for the object being refecenced is contingent upon
the chain reference. So basically the binding is implicit because the method is nested within the object.
* 3. New Binding: Functions are invoked with new which creates a new object which is refecenced by this.
* 4. Explicit Binding: The opposite of implicit binding, in this case the methods aren't inside the object. because the
object lacks the method you must use a call to invoke the method on the object and to pass arguments. You can also use apply which
lets you pass an entire array and bind which is like call but creates a new function that can be invoked later.
*
* write out a code example of each explanation above
*/

// Principle 1

window.whatever = 'whatever'

function what () {
  console.log(`${this.whatever} man`)
}

// Principle 2

/* An Easy example of of implicit binding has been seen in prior projects in which we were asked to pass methods to objects:*/
const user = {
  name: 'brianne',
  age: 33,
  gender: 'F',
  speak() {
    console.log(`Hello, my name is ${this.name}`)
  },
  .child {
  name: 'billy',
  age: 12,
  speak(){
  console.log(`Hello, my name is ${this.name}`)
}
}
}
user.speak();
user.child.speak();

/*and the function call user.speak() shows that user is the object being referenced by this, when greet is invoked/called.
wheras user.child.speak calls the child object. */

function tCip (name, email) {

  this.name = name
  this.email = email
}

const bob = new tCip('bob', 'bobbarker@barkingbob.com');
bob; //this references bob!

// code example for New Binding

// Principle 4
function speak(band1, band2) {
  alert(`Hello, my name is ${this.name} also wouldn't you want to know about my favoirte bands they are: ${band1} and ${band2} `)
}

const user = {
  name: 'brianne',
  age: 33,
  gender: 'F',
child :{
  name: 'tom',
  age: 12,
  gender: 'M'
}
}

const bands = {

  mother:['jamiroquai','Incubus',],
  son: ['xxxtentacion', 'The Carters']

}

speak.call(user)// bands come out as undefined.
speak.call(user.child, bands.son[0], bands.son[1])
const newmethod = speak.bind(user, bands.mother[0],bands.mother[1])
newmethod();
