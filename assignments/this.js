/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window -> this is the global context whenever a function is invoked. 
*              Global context depends on where we are working. If in the browser, this will be the window.
* 2. Implicit Binding -> whatever is to the left of the dot becomes the context for this in the function.
* 3. Explicit Binding -> this occurs when .call(), .apply(), or .bind() are used on a function
* 4. New - creates a new object that inherits stuff from parent.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



function dasFunc (){
    console.log(this);
}
//dasFunc();

// Principle 2

// code example for Implicit Binding
const dasObject = {
    greeting: 'What\'s up!?',
    sayHi: function (name){
        console.log(`${this.greeting} I am ${name}.`);
    }
};
dasObject.sayHi("DAS MA");


// Principle 3

// code example for New Binding

function DasFunction(name, gender){
    this.name = name;
    this.gender = gender;
    this.introduce = function (){
        console.log(`Hello! My name is ${this.name} and i am a ${this.gender}.`);
    }
}

const das = new DasFunction("Das", "Man");
das.introduce();
const jas = new DasFunction("Jas", "Woman");
jas.introduce();

// Principle 4

// code example for Explicit Binding


const myObject = {
    firstName: 'DAS',
    lastName: 'MA'
}
function fullName () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
}

fullName.apply(myObject);