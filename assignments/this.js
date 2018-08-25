/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
     this in implicit binding is defined by what is left of the dot when the function is invoked. 
* 2. Explicit binding
     this in explicit binding is bound using one of three Methods:
      .call (used with multiple params 1st being used to set the context in which THIS is referencing followed by multiple paramaters all of which will be passed in to your function, being seperated by commas) 
       .apply (used with only two params. 1st being the new context of which THIS will be referencing, 2nd being an array that will be passed in a parameters to your function.) 
        .bind(used to specifically change the context and make a new function where you will have to pass in the parameters.)
* 3. New Binding
    When a NEW function is created  the THIS keyword will then be referencing the new object created through JavasSripts Interpretor.
* 4. Window binding
     When this called without any of the above bindings it will not meet any of the rules of binding and will then default to reference the window.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this
// Principle 2

// code example for Implicit Binding
const User = {
    name: 'Chris',
    age: 31,
    local: 'Plano, Tx',
    sayStuff(){
        return `Hello I'm ${this.name} and I am ${this.age}`
    } 
}
User.sayStuff();


// Principle 3

// code example for New Binding
function NewUser(name, age, local){
    this.name = name;
    this.age = age;
    this.local = local;
}
const myDog = new NewUser('Obi', 2, 'The Pad')

console.log(myDog.name)
// Principle 4

// code example for Explicit Binding
let coolStuffArr = ['SUPER FAST CAR', 'really ugly coat'];
let chris = new NewUser('Chris', 31, 'Plano, Tx');

const sayWickedCoolStuff = function(thing1, thing2){
    return ` Hey ${this.name}, Look at this ${thing1} its so cool, and that ${thing2}, they are wicked cool!!!`
}
const sayWhat = sayWickedCoolStuff.apply(chris, coolStuffArr);


console.log(sayWhat)
