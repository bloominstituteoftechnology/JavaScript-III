/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding -- If none of the rules apply 'this' is default to window object but if we use strict mode, in that case returns undefined.

* 2. Implicit Binding --  when dot notation is used to invoke a function.

* 3. New Binding -- allow us to create an object from a constructor function.

* 4. Explicit Binding -- when .call(), .apply(), or .bind() are used on a function
*
* write out a code example of each explanation above
*/

// Principle 1
function weak(){
    console.log(this.liquid)
  }
  weak();
  const liquid = 'water';// code example for Window Binding

// Principle 2

let person = {
    name: 'Mary',
    lastName: 'Smith',
    fullName: function() {
      return `${this.name} ${this.lastName}`;
    }
  };
  console.log(person.fullName());// code example for Implicit Binding

 // Principle 3

 const Person = new Person('param');
 function Person(hairColor){
   this.hairColor = hairColor;
   this.color = function() {
     console.log(`The color of my hair is ${ hairColor}`);
   }
 }
 
 const fred = new Person('black');
 fred.color();
 
 
 const wilma = new Person('orage');
 wilma.color();// code example for New Binding

// Principle 4

const paycheck = { 
    total: 600
  };
  
  
  const inWallet = function(num1, num2, num3){
    return this.total - num1 - num2 - num3;
  }
  
  console.log(inWallet.call(paycheck, 14, 80, 423));// code example for Explicit Binding