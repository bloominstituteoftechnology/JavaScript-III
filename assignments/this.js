/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - occurs when dot notatin is used to invoke a function
* 2. New Binding- occurs when the new keyword is used to create a new obj. the new object is "this".
* 3. Explicit Binding- looks at where the function is being invoked. Can use method such as .call .apply .bind to assign "this".
* 4. Global Binding - "this" is the Window/Console Object.
*
* write out a code example of each explanation above
*/

// Principle 1
function sayAge () {
    console.log(this)
  }
  


// code example for Window Binding

// Principle 2
const user1 = {
    name: 'Alexis',
    age: 30,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
user1.greet();
// code example for Implicit Binding

// Principle 3
  function WalkingPerson(walker) {
    this.pace = 'is walking.';
    this.walker = walker;
    this.speak = function() {
        console.log(this.walkwe + this.pace);
        console.log(this);
    }
}

const alexis = new WalkingPerson('Alexis');
alexis.speak();


// code example for New Binding

// Principle 4
const user3 = {
    name: 'Alexis',
    age: 30,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
  greet.call(user3);
// code example for Explicit Binding