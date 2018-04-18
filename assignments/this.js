/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* /
// 1. Window/Global Object Binding: `this` points to current console or window which runs the code
// 2. Implicit Binding: `this` points to the closest directed methods
// 3. New binding: `this` points to a new custom method
// 4. Explicit binding: `this` points to a method which is specified by `apply`, `call`, `bind`
/*
* write out a code example of each explanation above
*/

// Principle 1

function myFunction() {
    console.log(this)
}
myFunction()

// Principle 2

const myObj = {
    myKey: "myValue",
    getThis: function(customValue) {
      console.log(this) // points to myObj
      console.log(this.myKey)
    }
}
myObj.getThis("myCustomValue");

// Principle 3

function Students(studentName) {
    this.speak = function() { // points to jerry
      console.log(this);
    }
  }
  
  const jerry = new Students('Jerry');
  
  jerry.speak();

// Principle 4

var people = [
  
    {
      name: "Jimmy",
      age: 27
    },
    {
      name: "Jerry",
      age: 27
    }];
  
  function introduceYourself(person) {
    return `hello `+ person.name
  }
  
  console.log(introduceYourself.call(this, people[0]));