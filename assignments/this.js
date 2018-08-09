/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: "This" will point to the window/console when used in the global scope.
* 2. Under Implicit Binding, "this" will direct to the object before the preceding dot if a fuction is being called.
* 3. Under New Binding, "this" will refer to the specific instance of the object that is created and returned under the constructor function.
* 4. Under Explicit Binding, "this" is explicitly defined whenever a call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.program = 'I develop programs';

function developProgram(program) {
    console.log(this.program)
}

// Principle 2

// code example for Implicit Binding

const listBio = {
    'name': 'Marious',
    'pasttime': 'he also enjoys streaming on Twitch.',
    'hobby': function(pasttime) {
        console.log(`${this.name} enjoys playing video games but: ${this.pasttime}`)
    }
}

// Principle 3

// code example for New Binding

function PoliteHost(greeter) {
    this.greeting = 'Hi, welcome to Chilis';
    this.greeter = greeter;
    this.speak = function() {
        console.log(`${this.greeting} ${this.greeter}`);
    }
}

const tatted = new PoliteHost('TatPack!');
const hunter = new PoliteHost('may we screw up your order today?')

tatted.speak();
hunter.speak();

// Principle 4

// code example for Explicit Binding

const engineer = {
    'name': 'Rick Sanchez',
    'hobbies': 'hanging with Morty'
}

const skills = ['warping time', 'traveling space'];

function introduce() {
    console.log(`Hello, I am: ${this.name} and I enjoy: ${skills} while: ${this.hobbies}`);
}

introduce.call(engineer, skills);