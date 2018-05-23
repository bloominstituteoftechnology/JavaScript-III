/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
* 2.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

`
1. Binds to the window object.
2. Binds to whatever follows the dot.
3. Binds to whatever the constructor intends.
4. Binds to whatever `call`, `apply`, or `bind` intend.
`

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const object = {
  "name": "Bob",
  "greeting": `Hi, I'm ${this.name}`
}

// Principle 3

// code example for New Binding

function ShutUp(person) {
  this.command = 'Shut up, ';
  this.person = person;
  this.shutUp = function() {
    return this.command + this.person;
  };
}

// Principle 4

// code example for Explicit Binding

let me = {
  name: 'Gabriel',
  age: 39
};

let doStuff = function(food1, food2, food3) {
  console.log(`My name is ${this.name}. I like to eat ${food1}, ${food2}, and ${food3}.`);
}

let foods = ['cheeseburgers','cookies','steak'];

// CALL
doStuff.call(me, foods[0], foods[1], foods[2])
doStuff.call(me, ...foods);

// APPLY
doStuff.apply(me, foods);

// BIND
let newFunction = doStuff.bind(me, ...foods);
newFunction();
