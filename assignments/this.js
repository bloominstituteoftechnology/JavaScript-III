/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding make a reference to the global value
* 2. implicit binding make a reference to the object before the . when calling a function
* 3. new binding make a reference to newly created object returned by the contructor
* 4. explicit deals with call and apply.
*
* write out a code example of each explanation above
*/

// Principle 1
function singSong(Song) {
    console.log(this);
    return name;
  }
  singSong("Count on me");

// code example for Window Binding

// Principle 2
const myObj = {
    song: "Count on me",
    singSong: function(name) {
      console.log(`${this.song} by ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// code example for Implicit Binding

// Principle 3
function personTemplate(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  newman.speak();

// code example for New Binding

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman); newman.speak.apply(jerry);