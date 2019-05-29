/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding: binds "this" to the console object
* 2. Implicit Binding: the object before a dot of a called function
* 3. New Binding: refers to the specific instance in which an object was created
* 4. Explicit Binding: whenever a call or apply method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name){
    console.log(this);
    return name;
}

sayName("Kyle Van Buren");

// Principle 2

// code example for Implicit Binding

const LeObject = {
    greeting: "Henlo",
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

LeObject.sayHello("Kyle");


// Principle 3

// code example for New Binding

function acquaintance(greeter){
    this.greeting = "Henlo";
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greeting + this.greeter);
    };
}

const Jay = new acquaintance("Bob");
const Bob = new acquaintance("Jay");

Jay.speak();
Bob.speak();

// Principle 4

// code example for Explicit Binding



function acquaintance(greeter){
    this.greeting = "Henlo";
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greeting + this.greeter);
    };
}

const Jay = new acquaintance("Bob");
const Bob = new acquaintance("Jay");

Jay.speak();
Bob.speak();


Jay.speak.call(Bob);
Bob.speak.apply(Jay);
