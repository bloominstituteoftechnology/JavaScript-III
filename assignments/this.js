/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WINDOW BINDING - When none of the other rules apply, the 'this' keyword defaults to the window object unless you are in strict mode in which case it returns undefined.

* 2. IMPLICT BINDING - this points to the object on which the function is called (what's to the left of the dot when the function is called ) - implict as automatic.

* 3.  EXPLICIT BINDING - We can tell the JavaScript Engine to set 'this' to point to a value using call, apply or bind.

* 4. BIND is used to create a new function that's permanently bound to a this value
*
* write out a code example of each explanation above
*/

    

// Principle 1

// code example for Window Binding
'use strict'
function person(name){
       console.log(this);
       return name;
     }   
     person('Christine');
     

// Principle 2

// code example for Implicit Binding
let myPerson = {
      name: 'Christine',
      say: 'Hello',
      speak: function (){
      console.log(this.say);
      }
     }
    
     myPerson.speak(); 
    
     

// Principle 3
//code example for Explicit Binding
function ghost(){
      console.log(this.boo);
    }
    
    const myGhost = {
      name: 'Casper',
      boo: 'booooooo!',
    }
    
    ghost.call(myGhost);  
    


// code example for New Binding
// Principle 4
function Person1(greeter) {
    this.greeting = 'Hello there ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const amanda = new Person1('Christine');
  const christine = new Person1('Amanda');
  
  christine.speak();
  amanda.speak();



