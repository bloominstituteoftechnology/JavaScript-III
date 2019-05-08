/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
Looking to the left of the function call for the this object
* 2. Window Binding 
When the this keyword defaults to the window object
* 3. Explicit
Telling the function what the context of the this variable will be  by using .call, .bind, or .apply
* 4. new Binding
*When the fuction is invoked with the new keyword, the this keyword inside that function is bounded to the new object being constructed
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(){
    console.log(`Hi, I'm ${this.name}`)
}

sayName()
// Principle 2

// code example for Implicit Binding

let me = {
    name: "Leianne",
    sayName: function(){
        console.log(`Hi, I'm ${this.name}`)
    }
}

me.sayName();
// Principle 3

// code example for New Binding

function Person(name)  {
    this.name = name;
    this.sayName = function(){
        console.log(`Hi, I'm ${this.name}`)
    }
}

const mike = new Person('Mike');
console.log(mike.sayName())
// Principle 4

// code example for Explicit Binding

function sayMyName() {
    console.log(`${this.name}`)
}

console.log(sayMyName.call(me));
const useLater = sayMyName.bind(mike);
console.log(useLater());
console.log(sayMyName.apply(mike));
