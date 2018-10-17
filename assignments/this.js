/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding - The global 'this' selection.
* 2. Implicit Binding - Implicit binding occurs when dot notation is used to invoke a function.
* 3. new Binding - Creates a new object from a constructor function.
* 4. Explicit Binding - Explicit binding occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayHi = function(){
    console.log(`Hello ${this.name}`);
}

const iAm = {
    name: 'Tommy'
}

sayHi();

// Principle 2

// code example for Implicit Binding

const me = {
    name: "Tommy",
    location: "Bay Area",
    greet: function() {
        console.log(`Hello! My name is ${this.name} and I am from ${this.location}!`);
    }
}

me.greet();

// Principle 3

// code example for New Binding

function Parent(attributes){
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
  }

const dad = new Parent(57, 'Mike', 'Oakland');

// Principle 4

// code example for Explicit Binding

const greet = function(){
    console.log(`Hello! My name is ${this.name} and I am from ${this.location}!`);
};

const myInfo = {
    name: "Tommy",
    location: "Bay Area",
}

greet.call(myInfo);