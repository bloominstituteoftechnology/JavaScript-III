/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*   

  let try to understand the concept of this keyword as every function why executing has a refrence to the current execution context called "this"
* 1. Default Binding : 
* 2. implicit binding 
* 3. explicit binding 
* 4. new binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let bar = 'bar1';

function foo(){
    
    console.log(this.bar)
}

foo()



// Principle 2

// code example for Implicit Binding

let o2 = { bar:'bar2', foo : foo }
let o3 = { bar:'bar3', foo : foo }

o2.foo()
o3.foo()

// Principle 3

// code example for New Binding

function baz(){
    this.bar = 'bar5';
    console.log(this.bar)
}

let obj2 = new baz()

// Principle 4

// code example for Explicit Binding

let obj = { bar:"bar4" }
foo.call( obj )