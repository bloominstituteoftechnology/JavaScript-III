/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding
In implicit binding, "This" simply refers to the function being called.
* 2. explicit binding
In explicit binding, we tell the computer what we want "This" to be.
* 3. window/global binding
This is the default.  If there is no object calling a function within your code, it is the window/global object doing the calling.
* 4. new binding
When you create a new object using a constructor, Javascript makes a new "this" keyword to refer to that new object.  Anything in the constructor code referring to "this" comes to refer to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
const roger={
    name:'roger',
    age:'300',
    speak:function(){
        console.log(`I am ${this.age} years old`)
    }
}

// Principle 3

// code example for New Binding
function Roger(cloneNumber){
    name="roger";
    this.cloneNumber= cloneNumber;
}
const newRoger=new Roger(3);
console.log(newRoger);

// Principle 4

// code example for Explicit Binding

function RogerRoger(cloneNumber){
    Roger.call(this,cloneNumber);
}
const repetitiveNaming=new RogerRoger(37);
console.log(repetitiveNaming);