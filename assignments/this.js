/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the GLOBAL scope, the value of 'this' inside of that function will be the WINDOW object.

* 2. Whenever a function is called by a PRECEEDING DOT, the object before the dot is "this"
* 3. Whenever a CONSTRUCTOR FUNCTION is used, 'this' refers to the 'SPECIFIC INSTANCE OF THE OBJECT'
* 4. Whenever call or apply method is used, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// *this doesn't work with anonymous functions*

// code example for Window Binding

function greet(name) {
    console.log(`Hello ${name}`); // "Hello Afshan"
    console.log(this); // this points to the Window object
}
greet('Afshan')


// Principle 2
// *. Whenever a function is called by a PRECEEDING DOT, the object before the dot is this*

// code example for Implicit Binding
greeting: 'Hello my name is',
    name: 'Afshan',
        introduce: function() {
            console.log(`${this.greeting} ${this.name}`); // this looks outside the introduce scope to the properties this is bound to
            console.log(this); // this points to object me
        }
};
me.introduce()


// Principle 3
//* Whenever a CONSTRUCTOR FUNCTION is used, this refers to the 'SPECIFIC INSTANCE OF THE OBJECT' that is created and returned by the constructor function*

// code example for New Binding
// Constructor Function
function Person(options) {
    this.firstName = options.firstName; // this refers to the instance of the object Person
    this.lastName = options.lastName; // this refers to the instance of the object Person
    this.greet = function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    };
};
Person({
    firstName: 'Afshan', lastName: 'Fatima'});

// new  operator
// The new  operator creates an instance of a user - defined object type or of one of the built -in object types that has a constructor function.In the example below, we're using new to create a new Person object.
const afshan = new Person({ firstName: 'Afshan', lastName: 'Fatima' }),
    console.log(Afshan), // afshan is an object
    Afshan:greet(), // "Hello my name is Afshan Fatima



// Principle 4
   //* Whenever call or apply method is used,  this is explicitly defined*

// code example for Explicit Binding
    const afshan = new Person({ firstName: 'Afshan', lastName: 'Fatima' }),
    const sara = new Person({ firstName: 'Sara', lastName: 'Ming' }),
    Afshan:greet.call(sara),
     // "Hello my name is Sara ming
    sara; greet.apply(afshan, []);
    // "Hello my name is afshan fatima

 // The call() method calls a function with a given this value and arguments provided individually. MDN webdocs
 // The apply() method calls a function with a given this value, and arguments provided as an array(or an array - like object).

