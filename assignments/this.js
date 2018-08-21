//Jerrard
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Javascript runtime exists in what is called "Window." So, binding to the window is binding to the runtime environment, which has a huge context. This form of binding is not very specific and is generally unused. Its context is like the literal word for "everything." which renders the keyword itself less specific and less useful because it has less context.

* 2. Implicit binding happens when, inside of the runtime "room", a "drawer" (such as an object) is created with its own properties/methods ("items") inside, and the keyword "this" is used. The keyword is used inside of a specific object, and therefore it references that object when it is used. The keyword "this" is implicit when its use is implied by its context.

* 3. Explicit binding occurs when the programmer explicitly sets the binding to an object by using .call or .apply.

* 4. New binding occurs when a new object is created and inherits the properties of the original class.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function WhoseMyParent() {
    console.log(this);
}
// Principle 2

// code example for Implicit Binding
var Jerrard = {name: "Jerrard", skin:"brown", age:22, bestfriend:"God"};
function Person(name, age, sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}
// Principle 3

// code example for New Binding

// Principle 4
var Peggy = new Person ("Peggy", 30, "female");
// code example for Explicit Binding

function SayHello () { 
    console.log("I am: ", this.name)
 }

SayHello.call (Peggy);
SayHello.call(Jerrard);