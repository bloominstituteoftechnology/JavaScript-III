/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. default binding-this points to the global object, in browsers this is window.  When the this keyword does not have a containing object, constructor function or bind, call, apply affiliations.
* 2. Implicit binding- the function referencing the this.x variable is contained inside an object.  
* 3. The this variable is passed off due to a function with bind, call, or apply.  
* 4. Part of a constructor function called with new.  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function defaultBinder () {
    return this.a;
}

// Principle 2

// code example for Implicit Binding
const myObject ={
    'mostBasicProgram':'Hello World!',
    'program': function() {
        return this.mostBasicProgram;
    }
}

// Principle 3

// code example for New Binding
function Person(parameters){
    this.firstName=parameters.firstName;
    this.lastName=parameters.lastName;
    this.age=parameters.age;
}
const Will=new Person({
    'firstName':'Will',
    'lastName': 'Kwon',
    'age':25
})
// Principle 4

// code example for Explicit Binding
function greeter (param) {
    console.log(`${this.greeting} ${param}`);
}
greeter.call({greeting:'Hello'}, 'Will');