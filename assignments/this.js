/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - When "this" is not explicitly assigned, the value
     will be the window/console object.  
* 2. Implicit Binding - When a function is invoked by dot notation, the 
    object before the dot will define the "this" keyword. Implicit binding is used for object 
    methods.
* 3. New binding - In new binding, a constructor function is used to create a new object,
    the constructor function is called using the "new" keyword. The new object will have the prototypes of the 
    function it was created from.  
* 4. Explicit binding - In explicit binding, "this" keyword is explicitly defined due to
    the use of call(), apply() or bind(). This allows overriding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowsBind(){
      console.log(this)
    }
    
    windowsBind();

// Principle 2

// code example for Implicit Binding
const Features = {
    color: 'red',
    name: 'Adele',
    greeting: function () {
        console.log (`Hello its ${this.name} from the other side, the sky is ${this.color} today`)
    }
}
Features.greeting();

// Principle 3

// code example for New Binding

function Music(lyrics) {
    this.artist = 'Adele';
    this.song = 'Hello';
    this.lyrics = lyrics;
    this.sing = function(){
        console.log (`This is ${this.song} by ${this.artist} the lyrics are ${this.lyrics}`);
    } 
}

const firstLine = new Music('Hello from the other side..');
const secondLine = new Music("I must've called a thousand times");

console.log(firstLine);
console.log(secondLine);

firstLine.sing();
secondLine.sing();

// Principle 4

// code example for Explicit Binding
const person = {
    name: 'Joanna'
}
const hobbies = ['drawing','sewing','cooking']

function meetme(hobbies1, hobbies2, hobbies3) {
    "use strict"
    console.log(`My name is ${this.name}, my hobbies are ${hobbies1}, ${hobbies2}, and ${hobbies3}.`)
}

meetme.apply(person,hobbies)