 // The for principles of "this";
//  in your own words. explain the four principle for the "this" keyword below.

// //  1. Window Global object binding 
// When you are inside of the global scope, the value of this is the entire window/console Object. It's a broad area that will need some specification. We can specify what we are implitmenting or pointignt o by using something referred to as "Implicit Binding" 
//  2. Implicit Binding 
// Implicit binding is pointing  to something directly inside of the global scope. We can specify what that is exactly by using "this." for example we can say "this.greeing" "this.age" "this.animal"
// //  3. New Binding 
// New binding is when we use the new keyword to call a fucntion that creates an object for us. An example is 
// fucntion CordialPerson(greeter) and then using...
// Const jasmine = new CordialPerson('tyler')
// jasmine.speak ();


//  4. Explicit Binding 
// Explicit binding is when we call someting explicitly with a new constext using .call and .apply 
// an example of this is jasmine.speak.call(tyler);tyler.speak.apply(jasmine);

//  write out a code example of each explanation above

// Principle 1
console.log(this)

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const person = {
   name: "Jasmine",
   age: "26",
   location: "San Francisco",
   code: function() {
    return `${this.name} loves to ${this.code}`;
    }}
console.log(person.code());
// Principle 3

//New Binding Example

function CordialPerson(greeter) {
    this.greeting = "Hola, Como estas";
    this.greeter = greeter;
    this.speak = function() {
        console.log( `${this.greeting} ${this.greeter} `);
    }
}

const jasmine = new CordialPerson("Jennifer Lopez");

jasmine.speak();

// Exlicit binding 

const singer = {
    'name':'Beyonce',
    'age':38
}
const talents = ['singing','dancing', 'acting'];

function introduce() {
    console.log(`My name is: ${this.name} my talents are, ${talents}`);
}

introduce.call(singer, talents);