/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding -- The this keyword references the object directly to the left of the dot when you invoke a function, so if you have:
const greeting = function(){
    console.log('Hello, my name is' + this.name)
}
const libby = {
    name: 'Libby'
};

greeting.name gives us a function that 
* 2. Explicit Binding
* 3. new Binding
* 4. window binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this.name);
    return name;
}
sayName("Moonchild");

// Principle 2

// code example for Implicit Binding

const myObj = {
    "greeting": "Hello",
    "sayHello": function(name) {
        return `${this["greeting"]} my name is: ${name}`;
    }
}

myObj.sayHello("Libby"); //should return: Hello my name is: Libby

// Principle 3

// code example for New Binding
//constructor function
function CordialPerson(greeter) {
    this.greeting = "Hello";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter)
    }
}
const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak(); //should return: Hello Newman
newman.speak(); //should return: Hello Jerry

// Principle 4

// code example for Explicit Binding
//.call .apply .bind

let me = {
    name: 'Libby',
    age: 29
};

let sayName = function(skill1, skill2, skill3) {
    console.log('My name is:' + this.name + 'I like to program with this stuff:' +skill1 + ',' +skill2 + ',' +skill3 ); //My name is: Libby I like to program with this stuff: HTML, CSS, JS
}
let skills = ['HTML', 'CSS', 'JS'];

//CALL
sayName.call(me, skills[0], skills[1], skills[2]);
//OR sayName.call(me, ...skills);

//APPLY - like call but will iterate over each item in an array!
sayName.apply(me, skills)

//BIND - returns a function with the same functionality of call
let newFunction = sayName.bind(me, ...skills);

newFunction();

