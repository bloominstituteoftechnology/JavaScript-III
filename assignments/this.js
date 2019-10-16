/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding = When "this" isn't set explicitly, implicitly or with the new binding, it will default to the global object. The global object is the window or the console. (We haven't gotten into that much yet.) You can prevent global binding with strict mode. (Probably a good idea.)
* 2. Implicit binding = Basically the standard way you will usually see "this". It essentially goes up in scope one level from it's current position, or over to the left one when you're looking at the invocation. For instance. If the invocation is: iAmAnObject.iAmAMethod() the "this" keyword in iAmAMethod would be bound to iAmAnObject.
* 3. New binding = Binds the this keyword to the specific instance of the new created object. So if you were to create several objects using the same constructor, each one would have the "this" keyword bound to just that one object.
* 4. Explicit binding = Whenever you use bind, call or apply you will pass the specific object you want to attach the "this" keyword to as an argument. Call and apply attach it to that object, and invokes the function right away. Bind makes a new function and assigns the "this" keyword to that. It does not invoke the new function, must do manually. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalScope() {
  console.log("Probably shouldn't ever do", this);
}
globalScope();
// Principle 2

// code example for Implicit Binding
const anObject = {
  implicitlySet: 'Will log this string',
  aMethod: function() {
    console.log(this.implicitlySet);
  }
}
anObject.aMethod();
// Principle 3

// code example for New Binding
function Example(a) {
  this.newBinding = a;
}

const exampleDos = new Example('This will print when newBinding logged');
console.log(exampleDos.newBinding);

// Principle 4

// code example for Explicit Binding
function Proto(attrs) {
  this.showThis = attrs.showThis;
}
function Constr(constrAttrs){
  Proto.call(this, constrAttrs);
}
const newObj = new Constr({
  showThis: "Used call in previous step to get this property from Proto"
});
console.log(newObj.showThis);