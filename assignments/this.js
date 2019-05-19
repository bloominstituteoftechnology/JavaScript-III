/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this will point to the window or console object in the global scope
* 2. Implicit Binding - The dot that precedes the function that is called points to the object before the dot. 
* 3. Explicit Binding - when call or apply or used, this is explicited 
* 4. New Binding - when using a function to create an object, the new keyword is used and this will refer to the specific instance of the newly created object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowName(name) {
    console.log(this);
    return name;
};
windowName("hello");


// Principle 2

// code example for Implicit Binding
const hunter = {
    traits: 'handsome',
    
    introduceYourself: function(name) {
        console.log(`My name is ${name}, and I am ${this.traits}.`)
    }
}
hunter.introduceYourself('Hunter');


// Principle 3

// code example for New Binding

function BatmanAndRobin(dynamicDuo) {
    this.greeting = 'I fight crime in a rubber suit, ';
    this.dynamicDuo = dynamicDuo;
    this.speak = function() {
      
     
      console.log(this.greeting + this.dynamicDuo);
      console.log(this);
    };
  }
  
  const batman = new BatmanAndRobin('Robin');
  const robin = new BatmanAndRobin('Batman');

console.log(batman);
console.log(robin);

batman.speak();
robin.speak();

// Principle 4

// code example for Explicit Binding

batman.speak.call(robin);