/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* this is a pointer that references wherever it is implicitly/explicitly pointed to, if not it looks for the most outer object, like the window object
* 1. window binding is when this is not pointed to a specific object/function
* 2. implicit binding means this will reference whatever is to the left, when invoking a method, since the object is to the left of the dot, it will reference that object
* 3. explicit binding is manually setting where to point to, you can do it will call, apply, and bind
* 4. new binding means that this will point to whatever new object is created from the constructor function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);


// Principle 2

// code example for Implicit Binding

const someObject = {
  name: 'alberto',
  sayHi: function() {return `Hello I am ${this.name}`}
}

someObject.sayHi(); 


// Principle 3

// code example for New Binding

function MyObject(stuff) {
  this.name = stuff.name;
}

MyObject.prototype.speak = function() {return `Hello I am ${this.name}`}

const newobj = new MyObject({});




// Principle 4

// code example for Explicit Binding

const someObject = {
  name: 'alberto',
}

function sayHi() {return `Hello I am ${this.name}`}

sayHi.call(someObject); 

