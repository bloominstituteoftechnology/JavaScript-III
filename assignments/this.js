/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Within the global scope, this will reference the window object (window binding).
* 2. Within an object method, this will reference the object the method is called upon (implicit binding).
* 3. Within a constructor, this will reference each object instance created (new binding).
* 4. When using the function methods apply(), bind(), and call(), this will reference the first argument passed (explicit binding).
*
* write out a code example of each explanation above
*/

// ------- Principle 1 -------

// code example for Window Binding

function thisIsTheWindow(){
    return this;
}
//console.log(thisIsTheWindow());

// ------- Principle 2 -------

// code example for Implicit Binding

const animals = {
    largeAnimal: 'whale',
    smallAnimal: 'mouse',
    information: function() {
        console.log(`${this.largeAnimal} is bigger than ${this.smallAnimal}`);
    }
}
//animals.information();

// ------- Principle 3 -------

// code example for New Binding
function Person(name){
    this.name = name;
}
// const sarah = new Person('Sarah');
// console.log(sarah.name);


// ------- Principle 4 -------

// code example for Explicit Binding
const excitedGreeting = {
    greeting: 'HEEELLLLLLOOOOOOO!!'
}

function greet(){
    console.log(`Sarah says, "${this.greeting}"`);
}

greet.call(excitedGreeting);