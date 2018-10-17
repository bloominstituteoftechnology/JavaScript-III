/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global
* 2. Implicit binding
* 3. Explicit binding
* 4. New binding
*
* write out a code example of each explanation above
*/

// Principle 1

function windowBinding(name) {
    console.log(this);
}

// Principle 2

const implicit = {
    name: 'Latifah',
    age: '27',
    greet: function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age}`)
    }
}

// Principle 3

const hobbies = ['cosplaying', 'sewing', 'playing video games']

function intro(hobbies){
console.log(`Hi, I'm ${this.name} and I enjoy ${this.hobbies}`)
} 

// Principle 4

function AnotherIntro(somePerson){
    this.somePerson = somePerson;
    this.saySomething = 'How are you';
    this.Intro = function(){
        console.log(`${this.saySomething}, I am ${this.somePerson}`)
    }
}

const chris  = new AnotherIntro('Chris')
AnotherIntro.saySomething();