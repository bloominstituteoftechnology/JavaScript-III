/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding = represents the browser's window. Object is supported by all browsers
* 2. Implicit binding = When you reference the object property to the left while calling.
* 3. Explicit binding = whenever you use call() or apply() / bind() methods
* 4. New binding = when a function is invoked with the new keyword
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function saySomething() {
    console.log(this);
}

// Principle 2
// code example for Implicit Binding

let horse = {
    breed: 'Pinto',
    sound: function(){
      return `${this.breed} goes neighhhh!`
    }
  }
  
  horse.sound()

// Principle 3
// code example for New Binding

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const Jesse = new Person('Jesse', 34);
console.log(Jesse.name);

// Principle 4
// code example for Explicit Binding

const yourObject = {
    name: 'Jesse Theisen',
    city: 'Apple Valley, Minnesota'
  }
  
  const thingsYouEnjoy = ['Video Games', 'Paranormal Phenomena', 'Museums']
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}.`
  }
  tellUsAboutYourself.call(yourObject, thingsYouEnjoy[0], thingsYouEnjoy[1], thingsYouEnjoy[2])
