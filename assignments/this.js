/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW/GLOBAL OBJECT BINDING:  when using "this" in global scope you will return the ENTIRITY of global objects.

* 2. IMPLICIT BINDING: "this" points to the object before the dot notation.

* 3. NEW BINDING: Basically using a constructor function to return an object, you have to use the "new" keyword to create a new object. 

* 4. EXPLICIT BINDING: whenever this is defined, you can override the constructor by using keywords - bind, call, apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



function global(name){
    console.log(this)
    return name;
}

// global("josh");



// Principle 2

// code example for Implicit Binding



object = {
    greeting: "hello",
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`)
        console.log(this)
    }
}
object.sayHello("josh!!!!")

// Principle 3

// code example for New Binding




function Object(greeter) {
    
    this.greeting = "hello";
    this.greeter = greeter;
    this.sayHello = function(name){
        console.log(`${this.greeting} my name is ${this.greeter}`);
        console.log(this);
    }
}
const joshh = new Object("josh")
const tata = new Object ("tataaaaaaa")
joshh.sayHello();
tata.sayHello();


// Principle 4



// code example for Explicit Binding



joshh.sayHello.call(tata);