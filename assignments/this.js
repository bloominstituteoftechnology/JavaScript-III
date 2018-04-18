/**/
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding: the this keyword gets bound to the window object by default when misused.
* 2.  This automatically binds to the object left of the . in the invocation if not told where to go.
* 3.  Explicit binding binds this manually using call bind or apply.
* 4.  New binding creates a new object and assigns this to that.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//const myObject = () => this.name = "Billy";
//myObject();
//console.log(window.name); //stoopid quokka doesn't have a window object

// Principle 2

// code example for Implicit Binding


const myImplicitObject = {
  name: "Mister Object",
  color: "red",
  number: 11,

  implicitMethod: function() {
    return `I'm an object, my name is ${this.name}, my favorite color is ${this.color}, and my lucky number is ${this.number}.`;
  }
}



console.log(myImplicitObject.implicitMethod());

// Principle 3

// code example for New Binding

const Person = function(hair_color, eye_color, height) {
  this.hair_color = hair_color;
  this.eye_color = eye_color;
  this.height = height;
  this.introduce = function() {
    return `Hi, I have no name, but my hair is ${this.hair_color}, my eye color is ${this.eye_color}, and I am ${this.height} feet tall.`;
  }
}

let someguy = new Person("brown", "green", 5);
console.log(someguy.introduce());
// Principle 4

// code example for Explicit Binding
