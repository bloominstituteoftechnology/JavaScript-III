/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding -- Refers to the this keyword in a global context. If the this keyword is called without using another binding method, it will reference "window."
* 2. Implicit Binding -- Uses dot notation. The this keyword references the object directly to the left of the dot when you invoke a function.
* 3. new Binding -- Allows us to use the values assigned with the this keyword by using the "new" keyword to invoke a function.
* 4. Explicit Binding -- Uses the this keyword within .call(), .apply(), or .bind() on a function.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayWhat(what) {
    console.log(this.what);
    return what;
}
sayWhat("Funk to Funky");

// Principle 2

// code example for Implicit Binding

const aThing = {
    "thing": "Welcome",
    "thisPlanet": function(planet) {
        return `${this["thing"]} to planet: ${planet}`;
    }
}

aThing.thisPlanet("Earth");

// Principle 3

// code example for New Binding
//constructor function
function AHuman(person) {
    this.say = "What are you doing ";
    this.person = person;
    this.speak = function() {
        console.log(this.say + this.person)
    }
}
const brian = new AHuman('Mrs. Hart');
const libby = new AHuman('Husbando');

brian.speak();
libby.speak();

// Principle 4

// code example for Explicit Binding
//.call .apply .bind

let me = {
    name: 'Libby',
    age: 29
};

let whoAmI = function(hobby1, hobby2, hobby3) {
    console.log('My name is:' + this.name + 'I like to do these things:' +hobby1 + ',' +hobby2 + ',' +hobby3 );
}
let hobbies = ['bungeejump', 'swim', 'bike'];

//CALL
// whoAmI.call(me, hobby[0], hobby[1], hobby[2]);
// //OR sayName.call(me, ...hobbies);

// //APPLY - like call but will iterate over each item in an array!
// whoAmI.apply(me, hobbies)

// //BIND - returns a function with the same functionality of call
// let newFunction = whoAmI.bind(me, ...hobbies);

// newFunction();

