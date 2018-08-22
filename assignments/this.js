/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This : refer by default to window object when there is no any other object
* 2. This : how a function is called
* 3. This : with new binding : 'this' variable point to the newly created object.
* 4. This :call, apply, and bind : mutate the value of 'this' from one context to another
*
* write out a code example of each explanation above
*/

// Principle 1



// code example for Window Binding
function example (){
    let a = 'Hello'
     return function foo (){
         console.log(` ${a} and ${this}`) 
     }
  }
    
  
     console.log(example ()())
  // Principle 2
  
  // code example for Implicit Binding
  const member ={
     PhoneNumber : 125145215, 
     title : 'Web-Developer',
     city : 'South-Boston',
     workForce : function (){
         return `We have a ${this.title} in ${this.city}`
     }
  }
     console.log(member.workForce())
  // Principle 3
  
  // code example for New Binding
  const Soccer = function (Country,League,  fans) {
     this.Country = Country;
     this.League = League;
     this.fans = fans;
     this.about = function (){
         return ` In ${this.Country}, there are ${fans} only for the ${League} League this years`
     }
    }
     const france = new Soccer ('France','1 Division',5600000);
  // Principle 4
  
  // code example for Explicit Binding
  
  const greeting = function(greeting){
     return `${greeting} , ${this.name} !!!`;}
  
  const student1={
     name : 'Joe',
     age : 26
  }
  const student2={
     name : 'Noe',
     age : 29
  }
  
  console.log(greeting.call(student1, 'Hello'));
  console.log(greeting.call(student2, 'Goodbye'));
  