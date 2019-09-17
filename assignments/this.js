/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. functions within global scope are methods on window/console Object  
* 2. When function is called by a preceding dot, the object before that dot is this.  
* 3. When constructor function is used, this refers to the specific instance of the object that is created and            returned by the constructor function.
* 4. When JavaScript’s call or apply method is used, this is explicitly defined. 
*
* write out a code example of each explanation above
*/

// Principle 1
function greet(name) {
    console.log('Hi ' + name);
    console.log(this);
}

greet('Marcin');

// code example for Window Binding

// Principle 2
let greetMe = {
    greeting: 'Hi ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetMe.speak('Marcin');

// code example for Implicit Binding

// Principle 3
function GreetMe(name) {
    this.greeting = 'Hi ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

GreetMe.prototype.sayBye = function() {
    console.log('Bye ' + this.name);
    console.log(this);
};


let greetMarcin = new GreetMe('Marcin');
let greetIsabelle = new GreetMe('Isabelle');

greetMarcin.speak();
greetIsabelle.speak();


// code example for New Binding

// Principle 4

greetMarcin.sayBye.call(greetIsabelle);
greetIsabelle.sayBye.call(greetMarcin);



// code example for Explicit Binding