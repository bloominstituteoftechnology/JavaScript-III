/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Object
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    console.log(this)
// Principle 2

// code example for Implicit Binding
const obj = {
    greeting: 'Hello',
    sayHello: function(name){
        console.log(this.greeting);
    }
}
// Principle 3

// code example for New Binding
function Person(name){
    this.greeting = 'hello';
    this.name = name;
    this.talk = function(){
        console.log(`${this.name} says ${this.greeting}!`)
    }
}

const alando = new Person('Alando');

alando.talk();
// Principle 4

// code example for Explicit Binding

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']);


