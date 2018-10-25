/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- Don't do this. ...seriously. If you do not implicate what `this` is, it will default "point" to the whole window when it is used. Window is the default binding for `this`.

* 2. Implicit Binding- "Left of the dot when invoked", implied though not plainly expressed. This means we didn't tell `this` to do this, it just does. We didn't have to say, "set this", or "this is signed to", JS itself does it.

* 3. New Binding- Constructor function (capitalize the variable), a new way of making objects that we haven't done before.

* 4. Explicit Binding- The opposite of Implicit, meaning it is stated clearly and in detail, leaving no room for confusion or doubt. In this case we have to state it clearly. // CALL: `.call()` method calls a function with a given `this` value and arguments provided individually. // APPLY: `.apply()` method calls a function with a given `this` value, and `arguments` provided as an array (or an array-like object) // BIND: `.bind()` method creates a new function that, when called, has it's `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. Bind hold onto something inside of a variable and allows us to store it for later and allows us to call it when we need to call it.
*
* write out a code example of each explanation above
*/

// Principle 1 (Window/Global Object Binding)
const windowFunction = function(){
  console.log(this);
}
// invoke with:
// windowFunction();

// Principle 2 (Implicit Binding)

const flower = {
  name: 'Lotus',
  bloom: function() {
    console.log(`The ${this.name} has bloomed`);
  }
  genus: {
    name: 'Loteae',
    sayGenus: function() {
      console.log(`This is the genus: ${this.name}`);
    }
  }
}

flower.bloom();

flower.genus.sayGenus();
// Principle 3 (New Binding)

const Animal = function (color, name, type) {
  this.color = color
  this.name = name
  this.type = type
}

const myCat = new Animal('white and black', 'wall-e', 'cat');

console.log(myCat);

// Principle 4 (Explicit Binding)
// CALL
const person = {
  name: 'Emma',
}

let favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']

function introduce(book1, book2, book3, book4) {
  console.log(`Hello! My name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, ${book4}.`)
}

introduce.call(person, favoriteBooks[0], favoriteBooks[1], favoriteBooks[2], favoriteBooks[3]);

// APPLY
const person = {
  name: 'Emma',
}

let favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']

function introduce(book1, book2, book3, book4) {
  console.log(`Hello! My name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, ${book4}.`)
}

introduce.apply(person, favoriteBooks);

// BIND
const person = {
  name: 'Emma',
}
let favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']
function introduce(book1, book2, book3, book4) {
  console.log(`Hello! My name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, ${book4}.`)
}
const newIntroduce = introduce.bind(person, favoriteBooks[0], favoriteBooks[1], favoriteBooks[2], favoriteBooks[3]);
newIntroduce();
