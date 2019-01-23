/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this in the default definition refers to the global object 'object window'
* 2. implicit binding means it is using dot notation and refers to whatever is left of the dot
* 3. explicit binding means explicity passing this to a call() or apply()
* 4. new binding means that an object is created and this refers to attributes
*
* write out a code example of each explanation above
*/

// Principle 1

console.log('Code example for Window Binding');
    
    window.name = 'Will';

    function sayName() {
        console.log('My name is ' + this.name);
    }  

sayName();

// Principle 2

console.log('Code example for Implicit Binding');

    const streamer = {
        name: 'Steven',
        age: 15,
        greet(){
            console.log('Hello and welcome to my stream. My name is ' + this.name);
        }
    }

    streamer.greet();

// Principle 3

console.log('Code example for New Binding');

function Gamer(name, age){
    this.name = name;
    this.age = age;
}

const tester = new Gamer('Garret', 19);

console.log(tester);

// Principle 4

console.log('Code example for Explicit Binding');

function sayHello() {
    console.log('Hello World, my name is ' + this.name);
}

sayHello.call(tester);
