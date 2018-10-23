/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When the "this" keyword is global in scope.
* 2. Implicit binding: When the "this" keyword's scope is implied as being left of the dot.
* 3. Explicit binding: When the "this" keyword's scope is bound by the "call", "apply" the "bind" operators.
* 4. New binding: When the "this" keyword's scope is bound to a new object created by the "new" keyword.
*
* write out a code example of each explanation above
*/

// Principle 1///////////////////////////////////////////////////

// code example for Window Binding

// Default binding to the this keyword

 console.log(window)
 console.log(this)

 function windowLevelFunction () {
   "use strict"
   console.log(this)
 }

 windowLevelFunction()

// Principle 2/////////////////////////////////////////////////

// code example for Implicit Binding

// Left of the dot when invoked.

 const flower = {
   name: 'Lotus',
   bloom: function () {
     console.log(`${this.name} has bloomed`)
   },
   genus: {
     name: 'Loteae',
     sayGenus: function () {
       console.log(this.name)
     }
   }
 }

 flower.genus.sayGenus()

 console.log(window.name)

// Principle 3///////////////////////////////////////////////////

 code example for New Binding

 const Animal = function (color, name, type) {
   //this = {}
   this.color = color
   this.name = name
   this.type = type
 }

 const myCat = new Animal('white and brown', 'Suki', 'Cat')

 console.log(myCat)

// Principle 4/////////////////////////////////////////////////////

// code example for Explicit Binding

// call, apply, bind

 const person = {
   name: 'Emma'
 }

 var favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']

 function introduce (book1, book2, book3, book4) {
   console.log(`Hello, my name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, and ${book4}`)
 }

 introduce.call(person, favoriteBooks[0], favoriteBooks[1], favoriteBooks[2], favoriteBooks[3])

 const person = {
   name: 'Emma'
 }

 var favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']

 function introduce (book1, book2, book3, book4) {
   console.log(`Hello, my name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, and ${book4}`)
 }

 introduce.apply(person, favoriteBooks)

 const person = {
   name: 'Emma'
 }

 var favoriteBooks = ['Dewey', 'The Shining', 'The man who was Thursday', 'Odyssey']

 function introduce (favoriteBooks) {
  console.log(`Hello, my name is ${this.name} and these are my favorite books ${book1}, ${book2}, ${book3}, and ${book4}`)
}

const newIntroduce = introduce.bind(person, favoriteBooks)

introduce()

newIntroduce()