/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding will bind to the window object if this is not implicitly or Explicitly bound to an object.
* 2. Implicit binding assumes that this is operating on the current object 
* 3. New Binding works off of constructors and binds this to the constructed object properties or methods
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log("Principle 1: Window Binding");
// code example for Window Binding
function windowBound(name){
    console.log(this);
    return name;
}

windowBound('name');

// Principle 2
console.log("Principle 2: Implicit Binding");
// code example for Implicit Binding
const person = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting}, my name is ${name}`);
      console.log(this);
    }
  };
  person.sayHello('Roman');

// Principle 3
console.log("Principle 3: New Binding.");

// code example for New Binding
function People(person){
    this.name = person.name;
    this.age = person.age;
    this.gender = person.gender;
    this.message = function(){
        //gender to Word
        this.gender = "m" ? "Male":"Female";
       return `Hello ${this.name}, it looks like you are a ${this.age} year old ${this.gender}`;
    }
}

const roman = {
    name   : "Roman",
    age    : 30,
    gender : "m"
}

const gregory = {
    name   : "Gregory",
    age    : 30,
    gender : "m"
}

const speakRoman = new People(roman);
const speakGregory = new People(gregory);
console.log(speakRoman.message());
console.log(speakGregory.message());

// Principle 4
console.log("Principle 4: Explicit Binding");

// code example for Explicit Binding

function People2(person){
    
    this.message = function(){
       return `Hello ${this.name}, it looks like you are a ${this.age} year old ${this.gender}`;
    }
}

const roman2 = {
    name   : "Roman",
    age    : 30,
    gender : "M"
}

const gregory2 = {
    name   : "Gregory",
    age    : 31,
    gender : "m"
}


const speakRoman2 = new People2(roman2);
const speakGregory2 = new People2(gregory2);
console.log(speakRoman2.message(roman2));
console.log(speakGregory2.message.call(gregory2));

