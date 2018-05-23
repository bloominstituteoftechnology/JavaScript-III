/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window.  This is when the .this would reference the console
        or window default value.  This could be an empty string or just window. 
* 2. Implicit. This is when you create and object and name it first. To invoke it
        you must use this.sayName(); which would be first.sayName();.  It is whatever
        is to the left of the dot. 
* 3. New Binding.  This is when you create a constructor function and you can create new const 
        lets or vars that inherit the original constructor function.
        
* 4. Explicit. During this, you would use call or apply method.  Lets say you have a function, array and object.  You could use call or apply to bind them together.  
        So you say console.log(function.applyorcall(object, array));
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
       return `${name} is learning JS`;
     }
     console.log(sayName("Joe"));

// Principle 2

let object1 = {
    "greeting": "This is implicit",
    "age": 23,
    "sayName": function() {
        console.log (this.greeting);
    }
}

object1.sayName();

// code example for Implicit Binding

// Principle 3

function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
       return (this.greeting + " " +this.greeter)
    }
  }

let jake = new CordialPerson("Joe")
console.log(jake.speak());



// code example for New Binding

// Principle 4

// code example for Explicit Binding

let that = function(param1,param2,param3){
    return `Hello, my name is ${this.name} but my friends call me ${this.nickname}. My skills include ${param1}, ${param2} and ${param3}`
}

let Joe = {
    "name": "Joe",
    "nickname": "Big Joe"
}

let skills = ['javascript','css', 'node.js'];

console.log(that.apply(Joe, skills));



