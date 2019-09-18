/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: when in the global scope, the value of 'this will be the window/console Object
* 2. Implicit Binding: whenever a function is called by a preceding dot, the object before that is this.
* 3. New Binding: whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding: Whenever Javascripts call or apply method is used, this is explicitly defined.
Using call, apply or bind
call pass in arguments one by one
apply pass in arguments as array
bind used to create a new function that is permanently bound to this value
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function ghost(){
    console.log(this.boo);
}
ghost();
const boo = 'boo';


// Principle 2

// code example for Implicit Binding

let myGhost = {
    name: 'Casper',
    boo: 'booo!',
    ghost: function(){
        console.log(this.boo);
    }
}
myGhost.ghost();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
function ghost(){
    console.log(this.boo);
}
let myGhost ={
    name:'Casper',
    boo:'boo',
}
friendlyGhost = ghost.bind(myGhost);

friendlyGhost();