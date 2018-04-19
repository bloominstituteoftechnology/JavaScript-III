/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*   
  let try to understand the concept of this keyword as every function why executing has a refrence to the current execution context called "this" it doesnt depend on anywhere shape of where it was written or where the space was called from it only depend on how the function is called
* 1. Default Binding : 
    The this keyword is governed by 4 rules which in order of presidence is 1. new keyword binding 2. explicit binding 3.implicit binding 4 default binding so if the a this aware function is called and it doesnt match rule 1 to 3 then the default binding kiks in i.e it default to the global scope but in strict mode it returns undefined  
* 2. implicit binding 
    if there is a call site and at the call site there is a context object then this points to the context object
* 3. explicit binding 
    when we explicitly use .Call() on a this aware function then the this keyword execution context is the object in which its explicitly called upon 
* 4. new binding
* when a new keyword is used in front of a this aware function there are 4 things that happened i.e 1. a new object is created out of the thin air 2. the newly created object get linked to another object 3. the newly created object get passed in as the excution context oof the function call 4. the object is returned i.e it implice the return this 
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